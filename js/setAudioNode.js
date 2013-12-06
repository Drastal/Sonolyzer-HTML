/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// JavaScript Document


// Cr�er le contexte audio (chrome seulement pour l'instant)
var context = new webkitAudioContext();

//cr�ation tableau de filtres de la voix
var tabVoiceFilter = new Array ();


var sourceNode;
var analyser;
var javascriptNode;
var tabSpecificFilters = new Array();

//r�cup�rer le son (balise audio)
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

    // cr�er un javascript node
    javascriptNode = context.createJavaScriptNode(2048, 1, 1);

    // connecter � la destination, sinon elle n'est pas appel�e
    javascriptNode.connect(context.destination);


    // cr�er un analyser
    analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;

    // cr�er une source node
    sourceNode = context.createMediaElementSource(audio);
    //connexion de l'analyser au javascriptNode
    analyser.connect(javascriptNode);

    setUpVoiceFilters();
    setUpSpecificFilters();
    //relie tabVoiceFilter � une entr�e et a une sortie
    console.log(tabVoiceFilter.length);
    sourceNode.connect(tabVoiceFilter[0]);
    tabVoiceFilter[tabVoiceFilter.length-1].connect(analyser);
    tabVoiceFilter[tabVoiceFilter.length-1].connect(context.destination);
    
    
    //filtre de test
         /*sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceIntensifyFilter.connect(context.destination);
         
         sourceNode.disconnect(voiceIntensifyFilter);
         sourceNode.connect(analyser);
         voiceIntensifyFilter.disconnect(context.destination);
         sourceNode.connect(context.destination);*/
         
}

// log si erreur
function onError(e) {
    console.log(e);
}
