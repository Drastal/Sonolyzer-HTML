
  $(function() {
   
    // setup graphic EQ
	var i=0;
	console.log("lol");
    $( "#eq>span" ).each(function() {
      // read initial values from markup and remove that
	  console.log("lel");
      
	  var id = i;
      $( this ).empty().slider({
        value: 50,
        range: "min",
        animate: true,
        orientation: "vertical",
		slide: function( event, ui ) {
		changeFilterGain(id,ui.value)
      }
      });
	 i=i+1;
    });
  });
