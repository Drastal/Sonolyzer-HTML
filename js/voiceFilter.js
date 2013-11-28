/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @author Emilie Durand
 */

// JavaScript Document


// create the audio context (chrome only for now)
var context = new webkitAudioContext();
var sourceNode;
var analyser;
var javascriptNode;

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
    voiceReduceFilter.gain.value = -20; //compris entre -40 et 40
    
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
    voiceSharpFilter.Q = 0.8; //compris entre 0.0001 et 1000 (Q=f0/deltaf)
    voiceSharpFilter.gain.value = 0; //non utilisé pour ce type de filtre
    
    
//get the sound
var audio = document.getElementById("song");

//get the checkboxes
var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
var voiceType = document.getElementById("activeType");   //activé, non activé

var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
var switchType = document.getElementById("voicetype");   //voix grave, voix aigue


// load the sound
setupAudioNodes();


function setupAudioNodes() {

    // setup a javascript node
    javascriptNode = context.createJavaScriptNode(2048, 1, 1);

    // connect to destination, else it isn't called
    javascriptNode.connect(context.destination);

    // setup a analyzer
    analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;

    // create a source node
    sourceNode = context.createMediaElementSource(audio);

    //------------TEST DES FILTRES ACTIVES----------
    
    alert(voiceLevel.checked);
    // si seulement les gains sont cochés
    if(voiceLevel.checked === true&&voiceType.checked !== true){
    alert("gains cochés !");
      if(switchLevel.checked !== true){                        // intensifier activé
         sourceNode.connect(voiceIntensifyFilter);
         voiceIntensifyFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceIntensifyFilter.connect(context.destination);  
      }else{                                                 // ou diminuer activé
         sourceNode.connect(voiceReduceFilter);    
         voiceReduceFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceReduceFilter.connect(context.destination); 
         }  
    }
    
    // si seulement les passe bandes sont cochés
    if(voiceLevel.checked !== true&&voiceType.checked === true){
    
      if(switchType.checked === true){                        //passe-bande voix grave activé
         sourceNode.connect(voiceBassFilter);
         voiceBassFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceBassFilter.connect(context.destination);  
       }else{                                               //passe-bande voix aigue activé
         sourceNode.connect(voiceSharpFilter);
         voiceSharpFilter.connect(analyser);
         analyser.connect(javascriptNode);
         voiceSharpFilter.connect(context.destination); 
       }
      
    }  
    
    //si les gains et les passe bandes sont cochés
    if(voiceLevel.checked === true&&voiceType.checked === true){
    
      if (switchLevel.checked !== true){                     // intensifier activé
      sourceNode.connect(voiceIntensifyFilter);
        if (switchType.checked === true){                        //passe-bande voix grave activé
               voiceIntensifyFilter.connect(voiceBassFilter);
               voiceBassFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceBassFilter.connect(context.destination);
        }else {                                                 //ou passe-bande voix aigue activé
                voiceIntensifyFilter.connect(voiceSharpFilter);
               voiceSharpFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceSharpFilter.connect(context.destination);
               }  
      }else {                                              // ou diminuer activé
      sourceNode.connect(voiceReduceFilter);               
        if (switchType.checked === true){                        //passe-bande voix grave activé
               voiceReduceFilter.connect(voiceBassFilter);
               voiceBassFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceBassFilter.connect(context.destination);
        }else {                                                 //ou passe-bande voix aigue activé
               voiceReduceFilter.connect(voiceSharpFilter);
               voiceSharpFilter.connect(analyser);
               analyser.connect(javascriptNode);
               voiceSharpFilter.connect(context.destination);
               }      
       }
    }
    
    //si rien n'est activé
    if (voiceLevel.checked !== true&&voiceType.checked !== true){
        //connexion de la source à l'analyser
        sourceNode.connect(analyser);
        //connexion de l'analyser au javascriptNode
        analyser.connect(javascriptNode);
        //connexion de la source la destination
        sourceNode.connect(context.destination);
    }
    //console.log("error");
}