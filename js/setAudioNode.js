// JavaScript Document

// Créer le contexte audio (chrome seulement pour l'instant)
var context = new webkitAudioContext();

//création tableau de filtres de la voix
var voiceFilter;

var sourceNode;
var analyser;
var javascriptNode;
var tabSpecificFilters = new Array();
var tabFilters = new Array();

//récupérer le son (balise audio)
var audio = document.getElementById("song");

//intensifier (augmentation du gain)
var voiceIntensifyFilter;
voiceIntensifyFilter = context.createBiquadFilter();
// dans ce cas un PEAKING filter
voiceIntensifyFilter.type = voiceIntensifyFilter.PEAKING;
voiceIntensifyFilter.frequency.value = 240.0;
//compris entre 0.0001 et 1000 (Q=f0/deltaf)
voiceIntensifyFilter.Q = 0.8;
//compris entre -40 et 40
voiceIntensifyFilter.gain.value = 40;

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

    // créer une source node
    sourceNode = context.createMediaElementSource(audio);
    //connexion de l'analyser au javascriptNode
    analyser.connect(javascriptNode);

    setUpVoiceFilters();
    setUpSpecificFilters();
    setUpEqualizerFilters();
    setUpGSMFilter();

    //relie tabVoiceFilter à une entrée et a une sortie
    sourceNode.connect(tabSpecificFilters[0]);

    tabSpecificFilters[tabSpecificFilters.length - 1].connect(GSMFilter);
    GSMFilter.connect(voiceFilter);
    voiceFilter.connect(tabFilters[0]);
    tabFilters[tabFilters.length - 1].connect(analyser);
    tabFilters[tabFilters.length - 1].connect(context.destination);

}

function whiteNoise()
{
    var bufferSize = 2 * context.sampleRate,
            noiseBuffer = context.createBuffer(1, bufferSize, context.sampleRate),
            output = noiseBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }

    whiteNoise = context.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;
    whiteNoise.start(0);

    whiteNoise.connect(tabSpecificFilters[0]);
}
// log si erreur
function onError(e) {
    console.log(e);
}