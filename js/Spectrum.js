// JavaScript Document

//récupérer le contexte du canvas où l'on va tracer le spectre
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// create a gradient for the fill. Note the strange
// offset, since the gradient is calculated based on
// the canvas, not the specific element we draw
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(1, '#000000');
gradient.addColorStop(0.75, '#00ffff');
gradient.addColorStop(0.25, '#00ff00');
gradient.addColorStop(0, '#ffffff');


// when the javascript node is called
// we use information from the analyzer node
// to draw the volume
javascriptNode.onaudioprocess = function() {

    // get the average for the first channel
    var array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    // clear the current state
    ctx.clearRect(0, 0, 1000, 325);

    // set the fill style
    ctx.fillStyle = gradient;
    drawSpectrum(array);

}

//tableau des valeurs du spectre
function drawSpectrum(array) {
    for (var i = 0; i < (array.length); i++) {
        var value = array[i];

        ctx.fillRect(i * 5, 325 - value, 3, 325);
        //  console.log([i,value])
    }
}
;
