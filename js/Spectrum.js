// JavaScript Document

//récupérer le contexte du canvas où l'on va tracer le spectre
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// create a gradient for the fill. Note the strange
// offset, since the gradient is calculated based on
// the canvas, not the specific element we draw
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(1, '#00ff88');
gradient.addColorStop(0.5, '#00bfff');
gradient.addColorStop(0, '#8800ff');

// log if an error occurs
function onError(e) {
    console.log(e);
}

// when the javascript node is called
// we use information from the analyzer node
// to draw the volume
javascriptNode.onaudioprocess = function() {

    // get the average for the first channel
    var array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    // clear the current state
    ctx.clearRect(0, 0, document.getElementById("canvas").width, 300);

    // set the fill style
    ctx.fillStyle = gradient;
    drawSpectrum(array);

}

//tableau des valeurs du spectre
function drawSpectrum(array) {
	//var frequencySelect=0;
    for (var i = 0; i < (array.length); i++) { // ****frequencySelect****
		//frequencySelect=frequencySelect+3;
        //var value = array[frequencySelect]*1.1;//Affiche une frequence sur 3, agrandie
		var value = array[i];
		
        ctx.fillRect(i * 5, 300 - value, 4, 300);
        //console.log([i,value])
    }
}