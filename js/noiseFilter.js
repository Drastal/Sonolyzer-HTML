// JavaScript Document


//DECLARATION DES FILTRES PREDEFINIS POUR CERTAINS BRUITS IDENTIFIES

//Bruit GSM
var GSMFilter;
function setUpGSMFilter()
{
    GSMFilter = context.createBiquadFilter();
    // dans ce cas un PEAKING filter
    GSMFilter.type = GSMFilter.PEAKING;
    GSMFilter.frequency.value = 240.0;
    //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    GSMFilter.Q = 0.8;
    //compris entre -40 et 40
    GSMFilter.gain.value = 0;
}
//fonction case GSM cochee
function noise_activeGSM_checked() {
    //get the checkbox
    //active, non active
    var noiseGSM = document.getElementById("activeGSM");

    // case gains cochee
    if (noiseGSM.checked === true) {
        GSMFilter.gain.value = -30;

    }
    //case gain decochee
    else {
        // ou diminuer desactive
        console.log("Filtre GSM desactivé");
        GSMFilter.gain.value = 0;
    }
}