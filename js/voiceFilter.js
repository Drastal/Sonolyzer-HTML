/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @author "Emilie Durand"
 */

// JavaScript

function setUpVoiceFilters(){
	voiceFilter = context.createBiquadFilter();
    voiceFilter.type = voiceIntensifyFilter.PEAKING;
    voiceFilter.frequency.value = 0; 
    voiceFilter.Q.value = 0; 
    voiceFilter.gain.value = 0;
	}

function voice_filter(){
	var code = 0;
    var voiceLevel = document.getElementById("activeLevel"); //activé, non activé
    var switchLevel = document.getElementById("voiceLevel"); //intensifier, diminuer
    var voiceType = document.getElementById("activeType");   //activé, non activé
    var switchType = document.getElementById("voiceType");   //voix grave, voix aigue
	if(voiceLevel.checked==true)
	{
		code = 8;
		if(switchLevel.checked==true)
		{
			code = code + 4;
		}
		if( voiceType.checked==true)
		{
			code = code + 2;
			if (switchType.checked==true)
			{
			code = code + 1;
			}
		}	
    }
	
	console.log("filter code: "+code);
	switch( code)
	{	
	case 0:
    voiceFilter.gain.value = 0; 
	break;
	case 8:
	voiceFilter.frequency.value = 790; 
    voiceFilter.Q.value = 0.5563;
    voiceFilter.gain.value = 12; 
	break;
	case 10:
	voiceFilter.frequency.value = 900; 
    voiceFilter.Q.value = 0.75;
    voiceFilter.gain.value = 12; 
	break;
	case 11:
	voiceFilter.frequency.value = 240; 
    voiceFilter.Q.value = 0.75;
    voiceFilter.gain.value = 12; 

	
	
	break;
	case 12:
	voiceFilter.frequency.value = 790; 
    voiceFilter.Q.value = 0.5563;
    voiceFilter.gain.value = -40; 
	break;
	case 14:
	voiceFilter.frequency.value = 900; 
    voiceFilter.Q.value = 0.75;
    voiceFilter.gain.value = -40; 
	break;
	case 15:
	voiceFilter.frequency.value = 240; 
    voiceFilter.Q.value = 0.75;
    voiceFilter.gain.value = -40; 
	break;
	default:

	
	}
    

        
}

