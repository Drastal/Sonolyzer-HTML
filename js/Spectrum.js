// JavaScript Document

// create the audio context (chrome only for now)
var context = new webkitAudioContext();
var audioBuffer;
var sourceNode;
var analyser;
var javascriptNode;
var filter1;
var filter2;
var filter3;

//création du flux
//window.audio = new Audio ();
//audio.src = "sounds/Perth.m4a";
//audio.controls = true;
//audio.autoplay = true;
//audio.loop = true;

//get the sound
var audio = document.getElementById("song");

// get the context from the canvas to draw on
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


// load the sound
setupAudioNodes();


function setupAudioNodes() {

    // setup a javascript node
    javascriptNode = context.createJavaScriptNode(2048, 1, 1);

    // connect to destination, else it isn't called
    javascriptNode.connect(context.destination);


    // setup a analyzer
    analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;

    //setsup a filter LOWPASS
    filter1 = context.createBiquadFilter();
    filter1.type = filter1.LOWPASS;  // In this case it's a LOWPASS filter
    filter1.frequency.value = 100.0;
    filter1.Q = 0;
    filter1.gain.value = 0;

    //setsup a filter LOWSHELF
    //filter2 = context.createBiquadFilter();
    //filter2.type = filter2.LOWSHELF;  // In this case it's a LOWSHELF filter
    //filter2.frequency.value = 300.0;
   // filter2.Q = 0;
    //filter2.gain.value = 10;
    
    //setsup a filter HIGHSHELF
    //filter3 = context.createBiquadFilter();
    //filter3.type = filter2.HIGHSHELF;  // In this case it's a HIGHSHELF filter
   // filter3.frequency.value = 300.0;
   // filter3.Q = 0;
    //filter3.gain.value = -40;

    // create a source node
    sourceNode = context.createMediaElementSource(audio);

    //filtre non-connecté
    //sourceNode.connect(analyser);

    //filtre connecté
    sourceNode.connect(filter1);
    //sourceNode.connect(filter2);
    //sourceNode.connect(filter3);
    filter1.connect(analyser);
    //filter2.connect(analyser);
   // filter3.connect(analyser);

    analyser.connect(javascriptNode);

    //filtre connecté
    filter1.connect(context.destination);
    //filter2.connect(context.destination);
    //filter3.connect(context.destination);

    //filtre non-connecté
    //sourceNode.connect(context.destination);
}

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
    ctx.clearRect(0, 0, 1000, 325);

    // set the fill style
    ctx.fillStyle = gradient;
    drawSpectrum(array);

}


function drawSpectrum(array) {
    for (var i = 0; i < (array.length); i++) {
        var value = array[i];

        ctx.fillRect(i * 5, 325 - value, 3, 325);
        //  console.log([i,value])
    }
}
