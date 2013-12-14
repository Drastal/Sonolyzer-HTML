// JavaScript Document

// Initialisation des valeurs des checkbox pour le module filtre voix

//gain activ�, non activ�
var activeLevel = document.getElementById("activeLevel");
var checkActiveLevel = activeLevel.checked;

//passe bande activ�, non activ�
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

//Contr�le du changement des checkboxs
//contr�le de la checkBox Gain
function activeLevel_check_control() {
    if (checkActiveLevel != activeLevel.checked) {
        checkActiveLevel = activeLevel.checked;
        console.log("gain chang�");
        return false;
    } else {
        console.log("gain non chang�");
        return true;
    }
}

//contr�le de la checkBox passe-bande
function activeType_check_control() {
    if (checkActiveType != activeType.checked) {
        checkActiveType = activeType.checked;
        console.log("passe-bande chang�");
        return false;
    } else {
        console.log("passe-bande non chang�");
        return true;
    }
}

//contr�le de la checkBox Intensifier/diminuer
function voiceLevel_check_control() {
    if (checkVoiceLevel != voiceLevel.checked) {
        checkVoiceLevel = voiceLevel.checked;
        console.log("Voice Level chang� ");
        return false;
    } else {
        console.log("Voice Level non chang�");
        return true;
    }
}

//contr�le de la checkBox aigue/grave
function voiceType_check_control() {
    if (checkVoiceType != voiceType.checked) {
        checkVoiceType = voiceType.checked;
        console.log("voice type chang�");
        return false;
    } else {
        console.log("voice type non chang�");
        return true;
    }
}