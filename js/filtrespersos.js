//Javascript Document

//create the audio context (chrome only for now)
var context = new webkitAudioContext();
var audioBuffer;
var sourceNode;
var analyser;
var javascriptNode;
var filter1;
var filter2;
var filter3;

//get the sound
var audio = document.getElementById("song");

// load the sound
filtre_passe_bas(name);


function filtre_passe_bas(check1, check2, name){
    
    var actif = document.getElementById(check1);
    var typefiltre = document.getElementById(check2);    
    var range = document.getElementById(name);

    if(actif.checked == true)
    {
        // setup a javascript node
        javascriptNode = context.createJavaScriptNode(2048, 1, 1);

        // connect to destination, else it isn't called
        javascriptNode.connect(context.destination);
    
        if(typefiltre.checked == false){
            //setsup a filter LOWPASS
            filter1 = context.createBiquadFilter();
            filter1.type = filter1.LOWPASS;  // In this case it's a LOWPASS filter
            filter1.frequency.value = parseInt(range.valueOf());
            filter1.Q = 0;
            filter1.gain.value = 0;
        
        }
        else
        {
            //setsup a filter HIGHPASS
            filter1 = context.createBiquadFilter();
            filter1.type = filter1.HIGHPASS;  // In this case it's a LOWPASS filter
            filter1.frequency.value = parseInt(range.valueOf());
            filter1.Q = 0;
            filter1.gain.value = 0;
        }
        // create a source node
        sourceNode = context.createMediaElementSource(audio);

        //filtre connecté
        sourceNode.connect(filter1);
        filter1.connect(analyser);

        //filtre connecté
        filter1.connect(context.destination);
     }   
}


