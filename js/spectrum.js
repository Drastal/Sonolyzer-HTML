// JavaScript Document

//recuperer le contexte du canvas ou l'on va tracer le spectre
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// creation du gradient pour le remplissage
// le gradient est calcule sur le canvas
// pas l'element specifique dessine
var gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(1, '#00ff88');
gradient.addColorStop(0.5, '#00bfff');
gradient.addColorStop(0, '#8800ff');

// log en cas d'erreur
function onError(e) {
    console.log(e);
}

//Quand le noeud javascript est appele
//utilisation de l'information du noeud analyseur
//pour dessiner le volume
javascriptNode.onaudioprocess = function() {

    // get the average for the first channel
    var array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    //redimensionnement du canvas pour remplir dynamiquement
    //la fenetre du navigateur
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas(array);
};

//tableau des valeurs du spectre
function drawSpectrum(array) {
    // effacement de l'etat actuel
    ctx.clearRect(0, 0, document.getElementById("canvas").width, 300);

    // style de remplissage
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