/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// JavaScript Document

// Initialisation des valeurs des checkbox pour le module filtre voix
var activeLevel = document.getElementById("activeLevel"); //gain activ�, non activ�
var checkActiveLevel = activeLevel.checked;

var activeType = document.getElementById("activeType");   //passe bande activ�, non activ�
var checkActiveType = activeType.checked;

var voiceLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
var checkVoiceLevel = voiceLevel.checked;

var voiceType = document.getElementById("voiceType");   //voix grave, voix aigue
var checkVoiceType = voiceType.checked ;

voiceFilter_check_control();

function voiceFilter_check_control(){
    console.log("gain : ", checkActiveLevel);
    console.log("passe-bande : ", checkActiveType);
    console.log("Voice Level (false=intensifier, true=diminuer) : ", checkVoiceLevel);
    console.log("voice type (false=voix aigue, true=voix grave) : ", checkVoiceType);
       
}

//-------------------------------Contr�le du changement des checkboxs------------------------
//contr�le de la checkBox Gain
function activeLevel_check_control(){
    if(checkActiveLevel != activeLevel.checked){
        checkActiveLevel = activeLevel.checked;
        console.log("gain chang�");
        return false;
    }else{
         console.log("gain non chang�");
        return true;
    }
 }
 
 //contr�le de la checkBox passe-bande
 function activeType_check_control(){
    if(checkActiveType != activeType.checked){
        checkActiveType = activeType.checked;
        console.log("passe-bande chang�");
        return false;
    }else{
         console.log("passe-bande non chang�");
        return true;
    }
 }
 
 //contr�le de la checkBox Intensifier/diminuer
 function voiceLevel_check_control(){
    if(checkVoiceLevel != voiceLevel.checked){
        checkVoiceLevel = voiceLevel.checked;
        console.log("Voice Level chang� ");
        return false;
    }else{
         console.log("Voice Level non chang�");
        return true;
    }
 }
 
 //contr�le de la checkBox aigue/grave
 function voiceType_check_control(){
    if(checkVoiceType != voiceType.checked){
        checkVoiceType = voiceType.checked;
        console.log("voice type chang�");
        return false;
    }else{
         console.log("voice type non chang�");
        return true;
    }
 }