// JavaScript
//Creation du filtre
function setUpVoiceFilters() {
    voiceFilter = context.createBiquadFilter();
    voiceFilter.type = voiceIntensifyFilter.PEAKING;
    voiceFilter.frequency.value = 0;
    voiceFilter.Q.value = 0;
    voiceFilter.gain.value = 0;
}

//Controle du filtre
function voice_filter() {
    var code = 0;
    var voiceLevel = document.getElementById("activeLevel");
    //active, non active
    var switchLevel = document.getElementById("voiceLevel");
    //intensifier, diminuer
    var voiceType = document.getElementById("activeType");
    //active, non active
    var switchType = document.getElementById("voiceType");
    //voix grave, voix aigue

    //recuperation du code du type de filtre
    if (voiceLevel.checked == true)
    {
        code = 8;
        if (switchLevel.checked == true)
        {
            code = code + 4;
        }
        if (voiceType.checked == true)
        {
            code = code + 2;
            if (switchType.checked == true)
            {
                code = code + 1;
            }
        }
    }
    //affectation des caracteristiques en fonction du code
    switch (code)
    {
        case 0:
            voiceFilter.gain.value = 0;
            //filtre desactictive code 0000
            break;

        case 8:
            voiceFilter.frequency.value = 790;
            voiceFilter.Q.value = 0.5563;
            voiceFilter.gain.value = 12;
            //filtre augmentation voix code 1000
            break;
        case 10:
            voiceFilter.frequency.value = 900;
            voiceFilter.Q.value = 0.75;
            voiceFilter.gain.value = 12;
            //filtre augmentation voix  aigue code 1010
            break;

        case 11:
            voiceFilter.frequency.value = 240;
            voiceFilter.Q.value = 0.75;
            voiceFilter.gain.value = 12;
            //filtre augmentation voix  grave code 1011
            break;

        case 12:
            voiceFilter.frequency.value = 790;
            voiceFilter.Q.value = 0.5563;
            voiceFilter.gain.value = -40;
            //filtre reduction voix  code 1100
            break;

        case 14:
            voiceFilter.frequency.value = 900;
            voiceFilter.Q.value = 0.75;
            voiceFilter.gain.value = -40;
            //filtre reduction voix  aigue code 1110
            break;

        case 15:
            voiceFilter.frequency.value = 240;
            voiceFilter.Q.value = 0.75;
            voiceFilter.gain.value = -40;
            //filtre reduction voix  grave code 1111
            break;
        default:
    }

}