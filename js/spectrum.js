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

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas(array);
};

//tableau des valeurs du spectre
function drawSpectrum(array) {
    // clear the current state
    ctx.clearRect(0, 0, document.getElementById("canvas").width, 300);

    // set the fill style
    ctx.fillStyle = gradient;

    var y = 0;
    var i;
    for (i = 1; Math.exp(i) < (array.length); ) {

        var value = array[Math.floor(Math.exp(i))];
        y = y + 10;
        i = i + 0.07;

        ctx.fillRect(y, (300 - value), 9, 300);
    }
}

function resizeCanvas(array) {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    drawSpectrum(array);
    console.log(Math.exp(i));
}