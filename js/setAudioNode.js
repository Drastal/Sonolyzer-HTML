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



//------------------------intensifier (gain ++)
var voiceIntensifyFilter;
voiceIntensifyFilter = context.createBiquadFilter();
    voiceIntensifyFilter.type = voiceIntensifyFilter.PEAKING;  // dans ce cas un PEAKING filter
    voiceIntensifyFilter.frequency.value = 240.0; 
    voiceIntensifyFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceIntensifyFilter.gain.value = 40; //compris entre -40 et 40

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
    //sourceNode.connect(context.destination);
    
    
    //filtre de test
         /*sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceIntensifyFilter.connect(context.destination);*/
         
}

// log si erreur
function onError(e) {
    console.log(e);
}
