/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @author Emilie Durand
 */

// JavaScript Document


//-------------DECLARATION DES FILTRES PREDEFINIS POUR LA VOIX-------------

//------------------------intensifier (gain ++)
var voiceIntensifyFilter;
voiceIntensifyFilter = context.createBiquadFilter();
    voiceIntensifyFilter.type = voiceIntensifyFilter.PEAKING;  // dans ce cas un PEAKING filter
    voiceIntensifyFilter.frequency.value = 240.0; 
    voiceIntensifyFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceIntensifyFilter.gain.value = 40; //compris entre -40 et 40
    
//-------------------------diminuer (gain --)
var voiceReduceFilter;
voiceReduceFilter = context.createBiquadFilter();
    voiceReduceFilter.type = voiceReduceFilter.PEAKING;  // dans ce cas un PEAKING filter
    voiceReduceFilter.frequency.value = 240.0; 
    voiceReduceFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceReduceFilter.gain.value = -40; //compris entre -40 et 40
    
//-------------------------passe-bande voix graves (80-400Hz)
var voiceBassFilter;
voiceBassFilter = context.createBiquadFilter();
    voiceBassFilter.type = voiceBassFilter.BANDPASS;  // dans ce cas un BANDPASS filter
    voiceBassFilter.frequency.value = 240.0; // moyenne 80-400 Hz
    voiceBassFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceBassFilter.gain.value = 0; //non utilisé pour ce type de filtre
    
//-------------------------passe-bande voix aigues (300-1500Hz)
var voiceSharpFilter;
voiceSharpFilter = context.createBiquadFilter();
    voiceSharpFilter.type = voiceSharpFilter.BANDPASS;  // dans ce cas un BANDPASS filter
    voiceSharpFilter.frequency.value = 900.0; // moyenne 80-400 Hz
    voiceSharpFilter.Q = 1000; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceSharpFilter.gain.value = 0; //non utilisé pour ce type de filtre
  


//--------------------fonction case Gain cochée------------------------
function voice_activelevel_checked(){
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activé, non activé
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
    
    // case gains cochée 
    if(voiceLevel.checked === true){       
        
      if(switchLevel.checked !== true){                        // intensifier activé
         console.log("intensifier activé");  
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         voiceIntensifyFilter.connect(context.destination);  
      }else{                                                 // ou diminuer activé
         console.log("diminuer activé");  
         sourceNode.connect(voiceReduceFilter);    
         voiceReduceFilter.connect(analyser);
         voiceReduceFilter.connect(context.destination); 
         }  
         
    }else{ //case gain décochée
         if(switchLevel.checked !== true){                        // intensifier desactivé
            console.log("intensifier desactivé");  
            sourceNode.disconnect(voiceIntensifyFilter);
            voiceIntensifyFilter.disconnect(analyser);
            voiceIntensifyFilter.disconnect(context.destination);  
          }else{                                                 // ou diminuer desactivé
            console.log("diminuer desactivé");  
            sourceNode.disconnect(voiceReduceFilter);    
            voiceReduceFilter.disconnect(analyser);
            voiceReduceFilter.disconnect(context.destination); 
             }  
             //si la case passe bande est décochée, on rebranche la source
            if(voiceType.checked !== true){
               sourceNode.connect(analyser);
               sourceNode.connect(context.destination);
            }else{
                voice_activetype_checked();
                console.log("activation de voice_activetype_checked()");
            }  
     }    
}

//------------------------fonction case Passe Bande Cochée------------------
function voice_activetype_checked(){   
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activé, non activé
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
    
    // case Passe Bande cochée 
    if(voiceType.checked === true){       
        
      if(switchType.checked === true){                        //passe-bande voix grave activé
         console.log("passe-bande voix grave activé");  
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         voiceBassFilter.connect(context.destination);  
       }else{                                               //passe-bande voix aigue activé
         console.log("passe-bande voix aigue activé");  
         sourceNode.connect(voiceSharpFilter);
         voiceSharpFilter.connect(analyser);
         voiceSharpFilter.connect(context.destination); 
       }
         
    }else{ //case Passe Bande décochée
         if(switchType.checked !== true){                        // passe-bande voix grave desactivé
             console.log("passe-bande voix grave desactivé");    
            sourceNode.disconnect(voiceBassFilter);
            voiceBassFilter.disconnect(analyser);
            voiceBassFilter.disconnect(context.destination);  
            }else{                                                 // ou passe-bande voix aigue  desactivé
                console.log("passe-bande voix aigue  desactivé"); 
                sourceNode.disconnect(voiceSharpFilter);    
                voiceSharpFilter.disconnect(analyser);
                voiceSharpFilter.disconnect(context.destination); 
            }  
            //si la case gain est décochée, on rebranche la source
            if(voiceLevel.checked !== true){
               sourceNode.connect(analyser);
               sourceNode.connect(context.destination);
            }
            else{
                voice_activelevel_checked();
                console.log("activation de voice_activelevel_checked()");
            }  
        }    
}

//----------------fonction Switch gain activé-----------
function voice_voicelevel_checked(){   
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    
     // case gains cochée 
    if(voiceLevel.checked === true){       
        
      if(switchLevel.checked !== true){                        
         console.log("intensifier activé, désactivation diminuer");  
         //diminuer desactivé
         sourceNode.disconnect(voiceReduceFilter);    
         voiceReduceFilter.disconnect(analyser);
         voiceReduceFilter.disconnect(context.destination); 
         // intensifier activé   
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         voiceIntensifyFilter.connect(context.destination);  
         }else{                                                 
             console.log("diminuer activé, désactivation intensifier");  
              //intensifier desactivé
             sourceNode.disconnect(voiceIntensifyFilter);    
             voiceIntensifyFilter.disconnect(analyser);
             voiceIntensifyFilter.disconnect(context.destination); 
             // diminuer activé   
             sourceNode.connect(voiceReduceFilter);
            voiceReduceFilter.connect(analyser);
            voiceReduceFilter.connect(context.destination);  
            } 
    voice_activetype_checked();        
    }else{ //case gain décochée
         alert("Vous n'avez pas coch\351 la case pour modifier le gain de la voix ! Le filtre ne sera pas appliqu\351."); 
     }     
}

//----------------fonction Switch type de voix activé-----------
function voice_voicetype_checked(){   
    //get the checkboxes
    var voiceType = document.getElementById("activeType");   //activé, non activé
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue    
        
      // case Passe Bande cochée 
    if(voiceType.checked === true){       
        
      if(switchType.checked === true){                        //passe-bande voix grave activé
         console.log("passe-bande voix grave activé, désactivation passe-bande voix aigue");  
          //passe-bande voix aigue desactivé
         sourceNode.disconnect(voiceSharpFilter);    
         voiceSharpFilter.disconnect(analyser);
         voiceSharpFilter.disconnect(context.destination); 
         //passe-bande voix grave activé
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         voiceBassFilter.connect(context.destination);  
         }else{                                               //passe-bande voix aigue activé
            console.log("passe-bande voix grave aigue, désactivation passe-bande voix grave");  
             //passe-bande voix grave desactivé
            sourceNode.disconnect(voiceBassFilter);    
             voiceBassFilter.disconnect(analyser);
            voiceBassFilter.disconnect(context.destination); 
            //passe-bande voix aigue activé
            sourceNode.connect(voiceSharpFilter);
            voiceSharpFilter.connect(analyser);
            voiceSharpFilter.connect(context.destination);  
        }
     voice_activelevel_checked()    
    }else{ //case Passe-Bande pas coché
        alert("Vous n'avez pas coch\351 la case pour modifier le type de la voix ! Le filtre ne sera pas appliqu\351."); 
    }    
}

