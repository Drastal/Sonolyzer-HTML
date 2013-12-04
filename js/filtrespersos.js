//Javascript Document

//create the audio context (chrome only for now)
var context = new webkitAudioContext();
var audioBuffer;
var sourceNode;
var analyser;
var javascriptNode;
var filtre;
//var filter2;
//var filter3;

//get the sound
var audio = document.getElementById("song");

// load the sound
filtremono();


function filtremono(){
    
    var actif = document.getElementById("activePass");
    var typefiltre = document.getElementById("passeFilter");
    var range = document.getElementById("rangePass")

    
      
    
        if(actif.checked == true)
        {
            if(typefiltre.checked == false){
                // mise en place d'un filtre passe-bas
                filtre = context.createBiquadFilter();
                filtre.type = filtre.HIGHPASS;  // Il s'agit d'un filtre passe-haut
                filtre.frequency.value = range.value;
                filtre.Q = 1;
        
            }
            else
            {
                //mise en place d'un filtre passe-haut
                filtre = context.createBiquadFilter();
                filtre.type = filtre.LOWPASS;  // Il s'agit d'un filtre passe-bas
                filtre.frequency.value = range.value;
                filtre.Q = 1;
            }
            
            //filtre connecté
            sourceNode.connect(filtre);
            filtre.connect(analyser);
            
            //filtre connecté
            filtre.connect(context.destination);
          }
        
        
}

function onError(e) {
    console.log(e);
}
