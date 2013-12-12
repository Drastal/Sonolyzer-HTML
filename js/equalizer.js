var tabSlider = new Array();
 function getEQSliders()
  {
	for (i = 1 ; i<12 ; i ++ )
	{
		tabSlider.push(document.getElementById("gain"+i));
	}
  }
  
  function setAllSliderOff()
  {
	for ( i = 0 ; i< tabSlider.length ; i++ ) 
	{
		tabSlider[i].value = 50;
		changeFilterGain(i,50);
		
	}
  }
