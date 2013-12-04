/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @author Emilie Durand
 */

// JavaScript Document


//-------------DECLARATION DES FILTRES PREDEFINIS POUR LA VOIX-------------
var frequenceVoiceIntensifyFilter =240.0;
var QVoiceIntensifyFilter =0.8;
var gainVoiceIntensifyFilter =40;
var frequenceVoiceReduceFilter =240.0;
var QVoiceReduceFilter =0.8;
var gainVoiceReduceFilter =-40;
var frequenceVoiceBassFilter =240.0;
var QvoiceBassFilter =0.8;
var gainvoiceBassFilter =0;
var frequenceVoiceSharpFilter =240.0;
var QvoiceSharpFilter =0.8;
var gainvoiceSharpFilter =0;
//------------------------intensifier (gain ++)
function setUpVoiceFilters(){
var voiceIntensifyFilter;
voiceIntensifyFilter = context.createBiquadFilter();
    voiceIntensifyFilter.type = voiceIntensifyFilter.PEAKING;  // dans ce cas un PEAKING filter
    voiceIntensifyFilter.frequency.value = 0; 
    voiceIntensifyFilter.Q = 0; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceIntensifyFilter.gain.value = 0; //compris entre -40 et 40
tabVoiceFilter[0]=voiceIntensifyFilter;    

    
//-------------------------diminuer (gain --)
var voiceReduceFilter;
voiceReduceFilter = context.createBiquadFilter();
    voiceReduceFilter.type = voiceReduceFilter.PEAKING;  // dans ce cas un PEAKING filter
    voiceReduceFilter.frequency.value = 0; 
    voiceReduceFilter.Q = 0; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceReduceFilter.gain.value = 0; //compris entre -40 et 40
tabVoiceFilter[1]=voiceReduceFilter;    

    
//-------------------------passe-bande voix graves (80-400Hz)
var voiceBassFilter;
voiceBassFilter = context.createBiquadFilter();
    voiceBassFilter.type = voiceBassFilter.BANDPASS;  // dans ce cas un BANDPASS filter
    voiceBassFilter.frequency.value = 240.0; // moyenne 80-400 Hz
    voiceBassFilter.Q = 0.0001; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceBassFilter.gain.value = 0; //non utilisé pour ce type de filtre
tabVoiceFilter[2]=voiceBassFilter;

    
//-------------------------passe-bande voix aigues (300-1500Hz)
var voiceSharpFilter;
voiceSharpFilter = context.createBiquadFilter();
    voiceSharpFilter.type = voiceSharpFilter.BANDPASS;  // dans ce cas un BANDPASS filter
    voiceSharpFilter.frequency.value = 240.0; // moyenne 80-400 Hz
    voiceSharpFilter.Q = 0.0001; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceSharpFilter.gain.value = 0; //non utilisé pour ce type de filtre
 tabVoiceFilter[3]=voiceSharpFilter;    



//---------------connection successive des filtres de la voix----------
for (i=1; i<tabVoiceFilter.length;i++){
    tabVoiceFilter[i-1].connect(tabVoiceFilter[i]);
}
}

//--------------initialisation des filtres-----------------



function voice_filter(){
    var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activé, non activé
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
    
    
    // case gains cochée 
    if(voiceLevel.checked === true){       
        
      if(switchLevel.checked !== true){                        // intensifier activé
        console.log("intensifier activé");  
        tabVoiceFilter[0].frequency.value =frequenceVoiceIntensifyFilter;
        tabVoiceFilter[0].Q = QVoiceIntensifyFilter; 
        tabVoiceFilter[0].gain.value = gainVoiceIntensifyFilter; 
      }else{                                                 // ou diminuer activé
        console.log("diminuer activé"); 
        tabVoiceFilter[1].frequency.value =frequenceVoiceReduceFilter;
        tabVoiceFilter[1].Q = QVoiceReduceFilter; 
        tabVoiceFilter[1].gain.value = gainVoiceReduceFilter; 
         }  
         
    }else{ //case gain décochée
         if(switchLevel.checked !== true){                        // intensifier desactivé
            console.log("intensifier desactivé");  
            tabVoiceFilter[0].frequency.value =0;
            tabVoiceFilter[0].Q = 0; 
            tabVoiceFilter[0].gain.value = 0; 
          }else{                                                 // ou diminuer desactivé
              console.log("diminuer desactivé");
              tabVoiceFilter[1].frequency.value =0;
              tabVoiceFilter[1].Q = 0; 
              tabVoiceFilter[1].gain.value = 0; 
             }   
     }    
    
     // case Passe Bande cochée 
    if(voiceType.checked === true){              
      if(switchType.checked === true){                        //passe-bande voix grave activé
         console.log("passe-bande voix grave activé");  
        tabVoiceFilter[2].frequency.value =frequenceVoiceBassFilter;
        tabVoiceFilter[2].Q = QVoiceBassFilter; 
        tabVoiceFilter[2].gain.value = gainVoiceBassFilter; 
       }else{                                               //passe-bande voix aigue activé
         console.log("passe-bande voix aigue activé");  
        tabVoiceFilter[3].frequency.value =frequenceVoiceSharpFilter;
        tabVoiceFilter[3].Q = QvoiceSharpFilter; 
        tabVoiceFilter[3].gain.value = gainVoiceSharpFilter; 
       }
         
    }else{ //case Passe Bande décochée
         if(switchType.checked !== true){                        // passe-bande voix grave desactivé
             console.log("passe-bande voix grave desactivé");    
             tabVoiceFilter[2].frequency.value =240;
             tabVoiceFilter[2].Q = 0.0001; 
             tabVoiceFilter[2].gain.value = 0; 
            }else{                                                 // ou passe-bande voix aigue  desactivé
                console.log("passe-bande voix aigue  desactivé"); 
                tabVoiceFilter[3].frequency.value =240;
                tabVoiceFilter[3].Q = 0.0001; 
                tabVoiceFilter[3].gain.value = 0; 
            }  
        }    
}

