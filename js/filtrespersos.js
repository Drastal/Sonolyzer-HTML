//Javascript Document



//----------------Création des filtres---------------

//Création d'un filtre passe-haut
function setUpSpecificFilters(){

var filter;
	for (i = 0; i < 4; i++) 
		{ 
			filter = context.createBiquadFilter();
			filter.type = filter.PEAKING;  
			filter.frequency.value =0;
			filter.Q=2;
			filter.gain.value=0;
			tabSpecificFilters.push(filter);
			if(i>0)
				{
					tabSpecificFilters[i-1].connect(tabSpecificFilters[i]);
				}				
		} 
}

function filtre_perso(){
//-------------Récupération des différentes Checkbox-----------
var checkMono = document.getElementById("activePass"); //activé ou non
var typeMono = document.getElementById("passeFilter"); //passe-haut ou passe-bas

var checkMulti = document.getElementById("activeBand"); //activé ou non
var typeMulti = document.getElementById("bandeFilter"); //passe-bande ou coupe-bande


//-------------Récupération des champs de séléction des fréquences-------
var rangeMono = document.getElementById("rangePass"); //fréquence pour le passe-haut ou passe-bas

var rangeMultiInf = document.getElementById("rangeLowBand");//1ère fréquence du passe-bande ou coupe-bande
var rangeMultiSup = document.getElementById("rangeHighBand");//2ème fréquence


    //Case passe-haut ou passe-bas cochée
    if(checkMono.checked == true){
        if(typeMono.checked == false){ //passe-haut
		    tabSpecificFilters[0].type=tabSpecificFilters[0].HIGHPASS;
            tabSpecificFilters[0].frequency.value = rangeMono.value;
			tabSpecificFilters[1].type=tabSpecificFilters[1].LOWSHELF;
			tabSpecificFilters[1].gain = 0;
			
            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;
			

        }
        else{ //passe-bas
			tabSpecificFilters[1].type=tabSpecificFilters[1].LOWPASS;
            tabSpecificFilters[1].frequency.value = rangeMono.value;
			
            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
			tabSpecificFilters[0].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[0].gain = 0;
        
        }
    }
    else{//Case décochée
        
			
            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
			tabSpecificFilters[0].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[0].gain = 0;
			tabSpecificFilters[1].type=tabSpecificFilters[1].LOWSHELF;
			tabSpecificFilters[1].gain = 0;
			
            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;
        
    }
    
    //Case passe-bande ou coupe-bande cochée
    if(checkMulti.checked == true){
        if(typeMulti.checked == false){//passe-bande activée
			tabSpecificFilters[2].type=tabSpecificFilters[2].BANDPASS;
            tabSpecificFilters[2].frequency.value = (parseInt(rangeMultiInf.value)+parseInt(rangeMultiSup.value))/2;
            tabSpecificFilters[2].Q = tabSpecificFilters[2].frequency.value/Math.abs(parseInt(rangeMultiSup.value)-parseInt(rangeMultiSup.value)); 
			tabSpecificFilters[3].type=tabSpecificFilters[3].LOWSHELF;
            tabSpecificFilters[3].frequency.value = 0;
            tabSpecificFilters[3].Q = 0;
			tabSpecificFilters[3].gain = 0;
        }else{//coupe-bande activée
			tabSpecificFilters[3].type=tabSpecificFilters[3].NOTCH;
            tabSpecificFilters[3].frequency.value = (parseInt(rangeMultiInf.value)+parseInt(rangeMultiSup.value))/2;
            tabSpecificFilters[3].Q = tabSpecificFilters[3].frequency.value/Math.abs(parseInt(rangeMultiSup.value)-parseInt(rangeMultiSup.value));
			tabSpecificFilters[2].type=tabSpecificFilters[2].LOWSHELF;
            tabSpecificFilters[2].frequency.value = 1510;
            tabSpecificFilters[2].Q = 0;
			tabSpecificFilters[2].gain = 0;
        }
    }
	else{ //Case décochée
       
		
			tabSpecificFilters[2].type=tabSpecificFilters[2].LOWSHELF;
            tabSpecificFilters[2].frequency.value = 1510;
            tabSpecificFilters[2].Q = 0;
			tabSpecificFilters[2].gain = 0;
        
			tabSpecificFilters[3].type=tabSpecificFilters[3].LOWSHELF;
            tabSpecificFilters[3].frequency.value = 0;
            tabSpecificFilters[3].Q = 0;
			tabSpecificFilters[3].gain = 0;
        
    }
}

