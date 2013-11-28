/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// JavaScript Document


// Créer le contexte audio (chrome seulement pour l'instant)
var context = new webkitAudioContext();
var sourceNode;
var analyser;
var javascriptNode;

//récupérer le son (balise audio)
var audio = document.getElementById("song");

// charger le son
setupAudioNodes();


function setupAudioNodes() {

    // créer un javascript node
    javascriptNode = context.createJavaScriptNode(2048, 1, 1);

    // connecter à la destination, sinon elle n'est pas appelée
    javascriptNode.connect(context.destination);


    // créer un analyser
    analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;

    // créer une source node
    sourceNode = context.createMediaElementSource(audio);

    //connexion de la source à l'analyser
    sourceNode.connect(analyser);
    //connexion de l'analyser au javascriptNode
    analyser.connect(javascriptNode);
    //connexion de la source la destination
    sourceNode.connect(context.destination);
}

// log si erreur
function onError(e) {
    console.log(e);
}
