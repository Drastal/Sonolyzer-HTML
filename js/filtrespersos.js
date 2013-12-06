//Javascript Document

filtremono();


//----------------Cr�ation des filtres---------------

//Cr�ation d'un filtre passe-bas
var filtre_passe_bas;
filtre_passe_bas = context.createBiquadFilter();
    filtre_passe_bas.type=filtre_passe_bas.LOWPASS;
    filtre_passe_bas.frequency.value = 100;
    filtre_passe_bas.Q = 0.8;
    

//Cr�ation d'un filtre passe-haut
var filtre_passe_haut; 
filtre_passe_haut = context.createBiquadFilter();
    filtre_passe_haut.type = filtre_passe_haut.HIGHPASS;
    filtre_passe_haut.frequency.value = 500;
    filtre_passe_haut.Q = 0.8;
    
    
//Cr�ation d'un filtre passe-bande    
var filtre_passe_bande;
filtre_passe_bande = context.createBiquadFilter();
    filtre_passe_bande.type = filtre_passe_bande.BANDPASS;
    filtre_passe_bande.frequency.value = 700;
    filtre_passe_bande.Q = 0.8;
    
    
//Cr�ation d'un filtre coupe-bande
var filtre_coupe_bande;
filtre_coupe_bande = context.createBiquadFilter();
    filtre_coupe_bande.type = filtre_coupe_bande.NOTCH;
    filtre_coupe_bande.frequency.value = 1000;
    filtre_coupe_bande.Q = 0.8;


//-------------R�cup�ration des diff�rentes Checkbox-----------
var checkMono = document.getElementById("activePass"); //activ� ou non
var typeMono = document.getElementById("passeFilter"); //passe-haut ou passe-bas

var checkMulti = document.getElementById("activeBand"); //activ� ou non
var typeMulti = document.getElementById("bandeFilter"); //passe-bande ou coupe-bande


//-------------R�cup�ration des champs de s�l�ction des fr�quences-------
var rangeMono = document.getElementById("rangePass"); //fr�quence pour le passe-haut ou passe-bas

var rangeMultiInf = document.getElementById("rangeLowBand");//1�re fr�quence du passe-bande ou coupe-bande
var rangeMultiSup = document.getElementById("rangeHighBand");//2�me fr�quence

//-----------Remplissage du tableau de filtre----------------
tabSpecificFilters[0] = filtre_passe_bas;
tabSpecificFilters[1] = filtre_passe_haut;
tabSpecificFilters[2] = filtre_passe_bande;
tabSpecificFilters[3] = filtre_coupe_bande;



function changeCheckBox(){
    if(checkMono.checked == true)
    {
        if(typeMono.checked == false)
        {
            changeChannel();
        }
    }
}
function filtremono(){

    
        if(actif.checked == true)
        {
            if(typefiltre.checked == false){
                // mise en place d'un filtre passe-haut
                filtre = context.createBiquadFilter();
                filtre.type = filtre.HIGHPASS;  // Il s'agit d'un filtre passe-haut
                filtre.frequency.value = range.value+".0";
                filtre.Q = 50;//Math.round(range.value/2980*10)/10;
        
            }
            else
            {
                //mise en place d'un filtre passe-bas
                filtre = context.createBiquadFilter();
                filtre.type = filtre.LOWPASS;  // Il s'agit d'un filtre passe-bas
                filtre.frequency.value = range.value+".0";
                filtre.Q = 0.8;
            }
            
            //filtre connect�
            sourceNode.connect(filtre);
            filtre.connect(analyser);
            
            //filtre connect�
            filtre.connect(context.destination);
          }
        
        
}


function changeChannel()
function changeChannelCharacs(tabFreq)

function onError(e) {
    console.log(e);
}
