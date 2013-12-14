//Javascript Document
//----------------Creation des filtres---------------

function setUpSpecificFilters(){

var filter;
	for (i = 0; i < 4; i++) 
		{ 
			//creation des filtres
			filter = context.createBiquadFilter();
			filter.type = filter.PEAKING;  
			filter.frequency.value =0;
			filter.Q=2;
			filter.gain.value=0;
			tabSpecificFilters.push(filter);
			if(i>0)
				{
					//connection des filtres
					tabSpecificFilters[i-1].connect(tabSpecificFilters[i]);
				}				
		} 
}

function filtre_perso(){
//-------------Recuperation des differentes Checkbox-----------
var checkMono = document.getElementById("activePass");
 //active ou non
var typeMono = document.getElementById("passeFilter");
 //passe-haut ou passe-bas
var checkMulti = document.getElementById("activeBand");
 //activé ou non
var typeMulti = document.getElementById("bandeFilter");
 //passe-bande ou coupe-bande

 
//-------------Recuperation des champs de selection des frequences-------
var rangeMono = document.getElementById("rangePass"); 
//frequence pour le passe-haut ou passe-bas
var rangeMultiInf = document.getElementById("rangeLowBand");
//1ere frequence du passe-bande ou coupe-bande
var rangeMultiSup = document.getElementById("rangeHighBand");
//2ème frequence


    //Case passe-haut ou passe-bas cochee
    if(checkMono.checked == true){
        if(typeMono.checked == false){
		//passe-haut
		//activation du passe haut
		    tabSpecificFilters[0].type=tabSpecificFilters[0].HIGHPASS;
            tabSpecificFilters[0].frequency.value = rangeMono.value;
			//desactivation du passe bas
			tabSpecificFilters[1].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[1].gain = 0;
            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;
			

        }
        else{ 
		//passe-bas
		//activation du passe bas
			tabSpecificFilters[1].type=tabSpecificFilters[1].LOWPASS;
            tabSpecificFilters[1].frequency.value = rangeMono.value;
			//desactivation du passe haut
			tabSpecificFilters[0].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[0].gain = 0;
            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
        
        }
    }
    else{
	//Case decochee
	//desactivation des deux types de filtres
			tabSpecificFilters[0].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[0].gain = 0;
            tabSpecificFilters[0].frequency.value = 0;
            tabSpecificFilters[0].Q = 0.0001;
			tabSpecificFilters[1].type=tabSpecificFilters[0].LOWSHELF;
			tabSpecificFilters[1].gain = 0;
            tabSpecificFilters[1].frequency.value = 0;
            tabSpecificFilters[1].Q = 0.0001;
        
    }
    
    //Case passe-bande ou coupe-bande cochee
    if(checkMulti.checked == true){
        if(typeMulti.checked == false){
		//passe-bande activee
			tabSpecificFilters[2].type=tabSpecificFilters[2].BANDPASS;
            tabSpecificFilters[2].frequency.value = (parseInt(rangeMultiInf.value)+parseInt(rangeMultiSup.value))/2;
            tabSpecificFilters[2].Q = tabSpecificFilters[2].frequency.value/Math.abs(parseInt(rangeMultiSup.value)-parseInt(rangeMultiSup.value)); 
			//desactivation du coupe bande
			tabSpecificFilters[3].type=tabSpecificFilters[3].LOWSHELF;
            tabSpecificFilters[3].frequency.value = 0;
            tabSpecificFilters[3].Q = 0;
			tabSpecificFilters[3].gain = 0;
        }else{
		//coupe-bande activee
			tabSpecificFilters[3].type=tabSpecificFilters[3].NOTCH;
            tabSpecificFilters[3].frequency.value = (parseInt(rangeMultiInf.value)+parseInt(rangeMultiSup.value))/2;
            tabSpecificFilters[3].Q = tabSpecificFilters[3].frequency.value/Math.abs(parseInt(rangeMultiSup.value)-parseInt(rangeMultiSup.value));
			//desactivation du passe bande
			tabSpecificFilters[2].type=tabSpecificFilters[2].LOWSHELF;
            tabSpecificFilters[2].frequency.value = 1510;
            tabSpecificFilters[2].Q = 0;
			tabSpecificFilters[2].gain = 0;
        }
    }
	else{ 
	//Case decochee
	//desactivation des deux types de filtres

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

