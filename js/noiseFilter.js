
//-------------DECLARATION DES FILTRES PREDEFINIS POUR CERTAINS BRUITS IDENTIFIES-------------

//------------------------Bruit GSM
var GSMFilter;
function setUpGSMFilter()
{
GSMFilter = context.createBiquadFilter();
    GSMFilter.type = GSMFilter.PEAKING; 
	// dans ce cas un PEAKING filter
    GSMFilter.frequency.value = 240.0; 
    GSMFilter.Q = 0.8;
    GSMFilter.gain.value = 0;
}
//--------------------Controle filtre------------------------
function noise_activeGSM_checked(){
    //get the checkbox
    var noiseGSM = document.getElementById("activeGSM"); //activé, non active
    
    // case gains cochee 
    if(noiseGSM.checked === true){              
         GSMFilter.gain.value=-30;
           
    }else{
	//case gain decochee                                           
          console.log("Filtre GSM desactivé");
		  // ou diminuer desactive
        
			GSMFilter.gain.value=0;
		
             }  
     }    