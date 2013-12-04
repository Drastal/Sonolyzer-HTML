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
    voiceBassFilter.gain.value = 0; //non utilis� pour ce type de filtre
    
//-------------------------passe-bande voix aigues (300-1500Hz)
var voiceSharpFilter;
voiceSharpFilter = context.createBiquadFilter();
    voiceSharpFilter.type = voiceSharpFilter.BANDPASS;  // dans ce cas un BANDPASS filter
    voiceSharpFilter.frequency.value = 900.0; // moyenne 80-400 Hz
    voiceSharpFilter.Q = 1000; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceSharpFilter.gain.value = 0; //non utilis� pour ce type de filtre
  


//--------------------fonction case Gain coch�e------------------------
function voice_activelevel_checked(){
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activ�, non activ�
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activ�, non activ�
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
    
    // case gains coch�e 
    if(voiceLevel.checked === true){       
        
      if(switchLevel.checked !== true){                        // intensifier activ�
         console.log("intensifier activ�");  
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         voiceIntensifyFilter.connect(context.destination);  
      }else{                                                 // ou diminuer activ�
         console.log("diminuer activ�");  
         sourceNode.connect(voiceReduceFilter);    
         voiceReduceFilter.connect(analyser);
         voiceReduceFilter.connect(context.destination); 
         }  
         
    }else{ //case gain d�coch�e
         if(switchLevel.checked !== true){                        // intensifier desactiv�
            console.log("intensifier desactiv�");  
            sourceNode.disconnect(voiceIntensifyFilter);
            voiceIntensifyFilter.disconnect(analyser);
            voiceIntensifyFilter.disconnect(context.destination);  
          }else{                                                 // ou diminuer desactiv�
            console.log("diminuer desactiv�");  
            sourceNode.disconnect(voiceReduceFilter);    
            voiceReduceFilter.disconnect(analyser);
            voiceReduceFilter.disconnect(context.destination); 
             }  
             //si la case passe bande est d�coch�e, on rebranche la source
            if(voiceType.checked !== true){
               sourceNode.connect(analyser);
               sourceNode.connect(context.destination);
            }else{
                voice_activetype_checked();
                console.log("activation de voice_activetype_checked()");
            }  
     }    
}

//------------------------fonction case Passe Bande Coch�e------------------
function voice_activetype_checked(){   
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activ�, non activ�
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activ�, non activ�
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
    
    // case Passe Bande coch�e 
    if(voiceType.checked === true){       
        
      if(switchType.checked === true){                        //passe-bande voix grave activ�
         console.log("passe-bande voix grave activ�");  
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         voiceBassFilter.connect(context.destination);  
       }else{                                               //passe-bande voix aigue activ�
         console.log("passe-bande voix aigue activ�");  
         sourceNode.connect(voiceSharpFilter);
         voiceSharpFilter.connect(analyser);
         voiceSharpFilter.connect(context.destination); 
       }
         
    }else{ //case Passe Bande d�coch�e
         if(switchType.checked !== true){                        // passe-bande voix grave desactiv�
             console.log("passe-bande voix grave desactiv�");    
            sourceNode.disconnect(voiceBassFilter);
            voiceBassFilter.disconnect(analyser);
            voiceBassFilter.disconnect(context.destination);  
            }else{                                                 // ou passe-bande voix aigue  desactiv�
                console.log("passe-bande voix aigue  desactiv�"); 
                sourceNode.disconnect(voiceSharpFilter);    
                voiceSharpFilter.disconnect(analyser);
                voiceSharpFilter.disconnect(context.destination); 
            }  
            //si la case gain est d�coch�e, on rebranche la source
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

//----------------fonction Switch gain activ�-----------
function voice_voicelevel_checked(){   
    //get the checkboxes
    var voiceLevel = document.getElementById("activeLevel"); //activ�, non activ�
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    
     // case gains coch�e 
    if(voiceLevel.checked === true){       
        
      if(switchLevel.checked !== true){                        
         console.log("intensifier activ�, d�sactivation diminuer");  
         //diminuer desactiv�
         sourceNode.disconnect(voiceReduceFilter);    
         voiceReduceFilter.disconnect(analyser);
         voiceReduceFilter.disconnect(context.destination); 
         // intensifier activ�   
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         voiceIntensifyFilter.connect(context.destination);  
         }else{                                                 
             console.log("diminuer activ�, d�sactivation intensifier");  
              //intensifier desactiv�
             sourceNode.disconnect(voiceIntensifyFilter);    
             voiceIntensifyFilter.disconnect(analyser);
             voiceIntensifyFilter.disconnect(context.destination); 
             // diminuer activ�   
             sourceNode.connect(voiceReduceFilter);
            voiceReduceFilter.connect(analyser);
            voiceReduceFilter.connect(context.destination);  
            } 
    voice_activetype_checked();        
    }else{ //case gain d�coch�e
         alert("Vous n'avez pas coch\351 la case pour modifier le gain de la voix ! Le filtre ne sera pas appliqu\351."); 
     }     
}

//----------------fonction Switch type de voix activ�-----------
function voice_voicetype_checked(){   
    //get the checkboxes
    var voiceType = document.getElementById("activeType");   //activ�, non activ�
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue    
        
      // case Passe Bande coch�e 
    if(voiceType.checked === true){       
        
      if(switchType.checked === true){                        //passe-bande voix grave activ�
         console.log("passe-bande voix grave activ�, d�sactivation passe-bande voix aigue");  
          //passe-bande voix aigue desactiv�
         sourceNode.disconnect(voiceSharpFilter);    
         voiceSharpFilter.disconnect(analyser);
         voiceSharpFilter.disconnect(context.destination); 
         //passe-bande voix grave activ�
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         voiceBassFilter.connect(context.destination);  
         }else{                                               //passe-bande voix aigue activ�
            console.log("passe-bande voix grave aigue, d�sactivation passe-bande voix grave");  
             //passe-bande voix grave desactiv�
            sourceNode.disconnect(voiceBassFilter);    
             voiceBassFilter.disconnect(analyser);
            voiceBassFilter.disconnect(context.destination); 
            //passe-bande voix aigue activ�
            sourceNode.connect(voiceSharpFilter);
            voiceSharpFilter.connect(analyser);
            voiceSharpFilter.connect(context.destination);  
        }
     voice_activelevel_checked()    
    }else{ //case Passe-Bande pas coch�
        alert("Vous n'avez pas coch\351 la case pour modifier le type de la voix ! Le filtre ne sera pas appliqu\351."); 
    }    
}

