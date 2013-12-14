/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// JavaScript Document


// Cr�er le contexte audio (chrome seulement pour l'instant)
var context = new webkitAudioContext();

//cr�ation tableau de filtres de la voix
var voiceFilter;


var sourceNode;
var analyser;
var javascriptNode;
var tabSpecificFilters = new Array();
var tabFilters = new Array();

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
    // cr�er une source node
    sourceNode = context.createMediaElementSource(audio);
    //connexion de l'analyser au javascriptNode
    analyser.connect(javascriptNode);
	
//------------------------set-up des filtres---------------

    setUpVoiceFilters();
    setUpSpecificFilters();
	setUpEqualizerFilters();
	setUpGSMFilter()
//------------------------branchement des filtres ---------

     sourceNode.connect(tabSpecificFilters[0]);
	tabSpecificFilters[tabSpecificFilters.length-1].connect(GSMFilter);
	GSMFilter.connect(voiceFilter);
    voiceFilter.connect(tabFilters[0]);
	tabFilters[tabFilters.length-1].connect(analyser);
	tabFilters[tabFilters.length-1].connect(context.destination);

         
}
// log si erreur
function onError(e) {
    console.log(e);
}
