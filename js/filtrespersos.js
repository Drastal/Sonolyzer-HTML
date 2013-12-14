//Javascript Document

//Creation des filtres

//Creation d'un filtre passe-haut
function setUpSpecificFilters() {

    var filter;
    for (i = 0; i < 4; i++)
    {
        filter = context.createBiquadFilter();
        filter.type = filter.PEAKING;
        filter.frequency.value = 0;
        filter.Q = 2;
        filter.gain.value = 0;
        tabSpecificFilters.push(filter);
        if (i > 0)
        {
            tabSpecificFilters[i - 1].connect(tabSpecificFilters[i]);
        }
    }
}

function filtre_perso() {
//Recuperation des differentes Checkbox
    //active ou non
    var checkMono = document.getElementById("activePass");
    //passe-haut ou passe-bas
    var typeMono = document.getElementById("passeFilter");
    //active ou non
    var checkMulti = document.getElementById("activeBand");
    //passe-bande ou coupe-bande
    var typeMulti = document.getElementById("bandeFilter");


//Recuperation des champs de selection des frequences
    //frequence pour le passe-haut ou passe-bas
    var rangeMono = document.getElementById("rangePass");
    //1ere frequence du passe-bande ou coupe-bande
    var rangeMultiInf = document.getElementById("rangeLowBand");
    //2eme frequence
    var rangeMultiSup = document.getElementById("rangeHighBand");


    //Case passe-haut ou passe-bas cochee
    if (checkMono.checked == true) {
        //passe-haut
        if (typeMono.checked == false) {
            tabSpecificFilters[0].type = tabSpecificFilters[0].HIGHPASS;
            tabSpecificFilters[0].frequency.value = rangeMono.value;
            tabSpecificFilters[1].type = tabSpecificFilters[1].LOWSHELF;
            tabSpecificFilters[1].gain = 0;

            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;


        }
        //passe-bas
        else {
            tabSpecificFilters[1].type = tabSpecificFilters[1].LOWPASS;
            tabSpecificFilters[1].frequency.value = rangeMono.value;

            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
            tabSpecificFilters[0].type = tabSpecificFilters[0].LOWSHELF;
            tabSpecificFilters[0].gain = 0;
        }
    }
    //Case decochee
    else {

        tabSpecificFilters[0].frequency.value = 0;
        tabSpecificFilters[0].Q = 0.0001;
        tabSpecificFilters[0].type = tabSpecificFilters[0].LOWSHELF;
        tabSpecificFilters[0].gain = 0;
        tabSpecificFilters[1].type = tabSpecificFilters[1].LOWSHELF;
        tabSpecificFilters[1].gain = 0;

        tabSpecificFilters[1].frequency.value = 0;
        tabSpecificFilters[1].Q = 0.0001;

    }

    //Case passe-bande ou coupe-bande cochee
    if (checkMulti.checked == true) {
        //passe-bande activee
        if (typeMulti.checked == false) {
            tabSpecificFilters[2].type = tabSpecificFilters[2].BANDPASS;
            tabSpecificFilters[2].frequency.value = (parseInt(rangeMultiInf.value) + parseInt(rangeMultiSup.value)) / 2;
            tabSpecificFilters[2].Q = tabSpecificFilters[2].frequency.value / Math.abs(parseInt(rangeMultiSup.value) - parseInt(rangeMultiSup.value));
            tabSpecificFilters[3].type = tabSpecificFilters[3].LOWSHELF;
            tabSpecificFilters[3].frequency.value = 0;
            tabSpecificFilters[3].Q = 0;
            tabSpecificFilters[3].gain = 0;
        }
        //coupe-bande activee
        else {
            tabSpecificFilters[3].type = tabSpecificFilters[3].NOTCH;
            tabSpecificFilters[3].frequency.value = (parseInt(rangeMultiInf.value) + parseInt(rangeMultiSup.value)) / 2;
            tabSpecificFilters[3].Q = tabSpecificFilters[3].frequency.value / Math.abs(parseInt(rangeMultiSup.value) - parseInt(rangeMultiSup.value));
            tabSpecificFilters[2].type = tabSpecificFilters[2].LOWSHELF;
            tabSpecificFilters[2].frequency.value = 1510;
            tabSpecificFilters[2].Q = 0;
            tabSpecificFilters[2].gain = 0;
        }
    }
    //Case decochee
    else {
        tabSpecificFilters[2].type = tabSpecificFilters[2].LOWSHELF;
        tabSpecificFilters[2].frequency.value = 1510;
        tabSpecificFilters[2].Q = 0;
        tabSpecificFilters[2].gain = 0;

        tabSpecificFilters[3].type = tabSpecificFilters[3].LOWSHELF;
        tabSpecificFilters[3].frequency.value = 0;
        tabSpecificFilters[3].Q = 0;
        tabSpecificFilters[3].gain = 0;

    }
}