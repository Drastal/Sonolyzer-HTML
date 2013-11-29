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

    
        // création d'une node javascript
        javascriptNode = context.createJavaScriptNode(2048, 1, 1);

        // connection à la destination
        javascriptNode.connect(context.destination);
        
        // setup a analyzer
        analyser = context.createAnalyser();
        analyser.smoothingTimeConstant = 0.3;
        analyser.fftSize = 512;
    
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
        }
        // création d'une node source
        sourceNode = context.createMediaElementSource(audio);

        //filtre connecté
        sourceNode.connect(filtre);
        filtre.connect(analyser);
        
        analyser.connect(javascriptNode);

        //filtre connecté
        filtre.connect(context.destination);
        
}

function onError(e) {
    console.log(e);
}
