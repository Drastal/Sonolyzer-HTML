// JavaScript Document

// Initialisation des valeurs des checkbox pour le module filtre voix

//gain activé, non activé
var activeLevel = document.getElementById("activeLevel");
var checkActiveLevel = activeLevel.checked;

//passe bande activé, non activé
var activeType = document.getElementById("activeType");
var checkActiveType = activeType.checked;


//intensifier, diminuer
var voiceLevel = document.getElementById("voiceLevel");
var checkVoiceLevel = voiceLevel.checked;


//voix grave, voix aigue
var voiceType = document.getElementById("voiceType");
var checkVoiceType = voiceType.checked;

voiceFilter_check_control();

function voiceFilter_check_control() {
    console.log("gain : ", checkActiveLevel);
    console.log("passe-bande : ", checkActiveType);
    console.log("Voice Level (false=intensifier, true=diminuer) : ", checkVoiceLevel);
    console.log("voice type (false=voix aigue, true=voix grave) : ", checkVoiceType);

}

//Contrôle du changement des checkboxs
//contrôle de la checkBox Gain
function activeLevel_check_control() {
    if (checkActiveLevel != activeLevel.checked) {
        checkActiveLevel = activeLevel.checked;
        console.log("gain changé");
        return false;
    } else {
        console.log("gain non changé");
        return true;
    }
}

//contrôle de la checkBox passe-bande
function activeType_check_control() {
    if (checkActiveType != activeType.checked) {
        checkActiveType = activeType.checked;
        console.log("passe-bande changé");
        return false;
    } else {
        console.log("passe-bande non changé");
        return true;
    }
}

//contrôle de la checkBox Intensifier/diminuer
function voiceLevel_check_control() {
    if (checkVoiceLevel != voiceLevel.checked) {
        checkVoiceLevel = voiceLevel.checked;
        console.log("Voice Level changé ");
        return false;
    } else {
        console.log("Voice Level non changé");
        return true;
    }
}

//contrôle de la checkBox aigue/grave
function voiceType_check_control() {
    if (checkVoiceType != voiceType.checked) {
        checkVoiceType = voiceType.checked;
        console.log("voice type changé");
        return false;
    } else {
        console.log("voice type non changé");
        return true;
    }
}