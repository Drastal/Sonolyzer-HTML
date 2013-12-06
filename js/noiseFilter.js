/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// JavaScript Document


//-------------DECLARATION DES FILTRES PREDEFINIS POUR CERTAINS BRUITS IDENTIFIES-------------

//------------------------Bruit GSM
var GSMFilter;
GSMFilter = context.createBiquadFilter();
    GSMFilter.type = GSMFilter.PEAKING;  // dans ce cas un PEAKING filter
    GSMFilter.frequency.value = 240.0; 
    GSMFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    GSMFilter.gain.value = 40; //compris entre -40 et 40

//--------------------fonction case GSM cochée------------------------
function noise_activeGSM_checked(){
    //get the checkbox
    var noiseGSM = document.getElementById("activeGSM"); //activé, non activé
    
    // case gains cochée 
    if(noiseGSM.checked === true){              
         console.log("Filtre GSM activé");  // intensifier activé
         sourceNode.connect(GSMFilter);
         GSMFilter.connect(analyser);
         GSMFilter.connect(context.destination);           
    }else{ //case gain décochée                                           
          console.log("Filtre GSM desactivé");  // ou diminuer desactivé
          sourceNode.disconnect(GSMFilter);    
          GSMFilter.disconnect(analyser);
          GSMFilter.disconnect(context.destination); 
          sourceNode.connect(analyser);
          sourceNode.connect(context.destination);
             }  
     }    