//Filtres de l'equaliseur

//Controle filtres
function changeFilterGain(index, value)
{
    tabFilters[index].gain.value = (value - 50) * 80 / 100;
}

//Creation des filtres
function setUpEqualizerFilters()
{
    //attribution des valeurs des bandes de frequence
    var tabValue = [16, 32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
    for (i = 0; i < 11; i++)
    {
        //creation des filtres
        filter = context.createBiquadFilter();
        filter.type = filter.PEAKING;
        filter.frequency.value = tabValue[i];
        filter.Q = 2;
        filter.gain.value = 0;
        tabFilters.push(filter);
        if (i > 0)
        {
            //branchement des filtres
            tabFilters[i - 1].connect(tabFilters[i]);
        }
    }
    //ajout d'un passe bas a30kHz
    filter = context.createBiquadFilter();
    filter.type = filter.LOWPASS;
    filter.frequency.value = 30000;
    tabFilters[tabFilters.length - 1].connect(filter);
    tabFilters.push(filter);
    //initialisation des controles graphiques
    getEQSliders();
}