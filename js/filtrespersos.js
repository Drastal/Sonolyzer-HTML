//Javascript Document



//----------------Cr�ation des filtres---------------

//Cr�ation d'un filtre passe-haut
function setUpSpecificFilters(){
var filtre_passe_haut;
filtre_passe_haut = context.createBiquadFilter();
    filtre_passe_haut.type=filtre_passe_haut.HIGHPASS;
    filtre_passe_haut.frequency.value = 0;

    tabSpecificFilters[0] = filtre_passe_haut;


//Cr�ation d'un filtre passe-bas

var filtre_passe_bas; 
filtre_passe_bas = context.createBiquadFilter();
    filtre_passe_bas.type = filtre_passe_bas.LOWPASS;
    filtre_passe_bas.frequency.value = 100000;
    
    tabSpecificFilters[1] = filtre_passe_bas;

    
    
//Cr�ation d'un filtre passe-bande    

var filtre_passe_bande;
filtre_passe_bande = context.createBiquadFilter();
    filtre_passe_bande.type = filtre_passe_bande.BANDPASS;
    filtre_passe_bande.frequency.value = 1510;
    filtre_passe_bande.Q = 0.0001;
    tabSpecificFilters[2] = filtre_passe_bande;

    
//Cr�ation d'un filtre coupe-bande

var filtre_coupe_bande;
filtre_coupe_bande = context.createBiquadFilter();
    filtre_coupe_bande.type = filtre_coupe_bande.NOTCH;
    filtre_coupe_bande.frequency.value = 0;
    filtre_coupe_bande.Q = 100;
    tabSpecificFilters[3] = filtre_coupe_bande;
    
 //Connection successive des diff�rents filtres
 
for(i=1; i<tabSpecificFilters.length; i++){
    tabSpecificFilters[i-1].connect(tabSpecificFilters[i]);
}
}

function filtre_perso(){
//-------------R�cup�ration des diff�rentes Checkbox-----------
var checkMono = document.getElementById("activePass"); //activ� ou non
var typeMono = document.getElementById("passeFilter"); //passe-haut ou passe-bas

var checkMulti = document.getElementById("activeBand"); //activ� ou non
var typeMulti = document.getElementById("bandeFilter"); //passe-bande ou coupe-bande


//-------------R�cup�ration des champs de s�l�ction des fr�quences-------
var rangeMono = document.getElementById("rangePass"); //fr�quence pour le passe-haut ou passe-bas

var rangeMultiInf = document.getElementById("rangeLowBand");//1�re fr�quence du passe-bande ou coupe-bande
var rangeMultiSup = document.getElementById("rangeHighBand");//2�me fr�quence


    //Case passe-haut ou passe-bas coch�e
    if(checkMono.checked === true){
        if(typeMono.checked === false){ //passe-haut
            tabSpecificFilters[0].frequency.value = rangeMono.value;
            tabSpecificFilters[0].Q = Math.round(range.value/2980*10)/10;
        }
        else{ //passe-bas
            tabSpecificFilters[1].frequency.value = rangeMono.value;
            tabSpecificFilters[1].Q = Math.round(range.value/2980*10)/10;
        }
    }
    else{//Case d�coch�e
        if(checkMono.checked !== true){
            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
        }else{
            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;
        }
    }
    
    //Case passe-bande ou coupe-bande coch�e
    if(checkMulti.checked === true){
        if(typeMulti.checked === false){//passe-bande activ�e
			console.log(rangeMultiInf.value +"    "+rangeMultiSup.value);
			
            tabSpecificFilters[2].frequency.value = (rangeMultiInf.value+rangeMultiSup.value)/2;
            tabSpecificFilters[2].Q = tabSpecificFilters[2].frequency.value/(rangeMultiInf.value+rangeMultiSup.value);
			console.log(tabSpecificFilters[2].frequency.value/(rangeMultiInf.value+rangeMultiSup.value));
        }else{//coupe-bande activ�e
		console.log(rangeMultiInf.value +"    "+rangeMultiSup.value);
            tabSpecificFilters[3].frequency.value = (rangeMultiInf.value+rangeMultiSup.value)/2;
            tabSpecificFilters[3].Q = tabSpecificFilters[3].frequency.value/(rangeMultiInf.value+rangeMultiSup.value);
        }
    }else{ //Case d�coch�e
        if(checkMulti.checked !== true){//passe-bande d�sactiv�e
            tabSpecificFilters[2].frequency.value = 1510;
            tabSpecificFilters[2].Q = 0.0001;
        }else{//coupe-bande d�sctiv�e
            tabSpecificFilters[3].frequency.value = 0;
            tabSpecificFilters[3].Q = 1000;
        }
    }
}

