//--------------------Controle equiliseur graphique------------------------

var tabSlider = new Array();
//--------------------Fonction d'acquisition des sliders------------------------

 function getEQSliders()
  {
	for (i = 1 ; i<12 ; i ++ )
	{
		tabSlider.push(document.getElementById("gain"+i));
	}
  }
  
  //--------------------fonction de remise a zero des filtres------------------------

  function setAllSliderOff()
  {
	for ( i = 0 ; i< tabSlider.length ; i++ ) 
	{
		tabSlider[i].value = 50;
		changeFilterGain(i,50);
		
	}
  }
