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
var cpt1=0;
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
    voiceReduceFilter.gain.value = -20; //compris entre -40 et 40
    
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
    voiceSharpFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceSharpFilter.gain.value = 0; //non utilis� pour ce type de filtre
    

try{
// load the sound
voice_filter();
}catch (e) {
console.log("voice filter");}


function voice_filter() {
    
    //get the checkboxes
var voiceLevel = document.getElementById("activeLevel"); //activ�, non activ�
var voiceType = document.getElementById("activeType");   //activ�, non activ�

var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
var switchType = document.getElementById("voicetype");   //voix grave, voix aigue


   console.log("rentre dans voice_filter");

    //------------TEST DES FILTRES ACTIVES----------
    
    //alert(voiceLevel.checked);
    // si seulement les gains sont coch�s
    if(voiceLevel.checked === true&&voiceType.checked !== true){
    console.log("ok");
    
        if(cpt1=0){
            cpt1=0;
            console.log(cpt1);
        }else {
            cpt1=1;
            console.log(cpt1);
        }
        
        
      if(switchLevel.checked !== true){                        // intensifier activ�
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceIntensifyFilter.connect(context.destination);  
      }else{                                                 // ou diminuer activ�
         sourceNode.connect(voiceReduceFilter);    
         voiceReduceFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceReduceFilter.connect(context.destination); 
         }  
    }
    
    // si seulement les passe bandes sont coch�s
    if(voiceLevel.checked !== true&&voiceType.checked === true){
    
      if(switchType.checked === true){                        //passe-bande voix grave activ�
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceBassFilter.connect(context.destination);  
       }else{                                               //passe-bande voix aigue activ�
         sourceNode.connect(voiceSharpFilter);
         voiceSharpFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceSharpFilter.connect(context.destination); 
       }
      
    }  
    
    //si les gains et les passe bandes sont coch�s
    if(voiceLevel.checked === true&&voiceType.checked === true){
    
      if (switchLevel.checked !== true){                     // intensifier activ�
      sourceNode.connect(voiceIntensifyFilter);
        if (switchType.checked === true){                        //passe-bande voix grave activ�
               voiceIntensifyFilter.connect(voiceBassFilter);
               voiceBassFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceBassFilter.connect(context.destination);
        }else {                                                 //ou passe-bande voix aigue activ�
                voiceIntensifyFilter.connect(voiceSharpFilter);
               voiceSharpFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceSharpFilter.connect(context.destination);
               }  
      }else {                                              // ou diminuer activ�
      sourceNode.connect(voiceReduceFilter);               
        if (switchType.checked === true){                        //passe-bande voix grave activ�
               voiceReduceFilter.connect(voiceBassFilter);
               voiceBassFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceBassFilter.connect(context.destination);
        }else {                                                 //ou passe-bande voix aigue activ�
               voiceReduceFilter.connect(voiceSharpFilter);
               voiceSharpFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceSharpFilter.connect(context.destination);
               }      
       }
    }
    
    //si rien n'est activ�
    if (voiceLevel.checked !== true&&voiceType.checked !== true){

        //connexion de la source la destination
        sourceNode.connect(context.destination);
         console.log(cpt1)
    }
    //console.log("error");
}