// JavaScript Document

var activeSong;
//Plays the song. Just pass the id of the audio element.

function play(id){
	//Sets the active song to the song being played. All other functions depend on this.
	activeSong = document.getElementById(id);
	//Plays the song defined in the audio tag.
	activeSong.play();
	
	//Calculates the starting volume percentage of the song.
	var percentageOfVolume = activeSong.volume / 1;
	var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
	
	//Fills out the volume status bar.
	document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

//Pauses the active song.
function pause(){
	activeSong.pause();
}

function playPause(id){
	//Sets the active song since one of the functions could be play.
	activeSong = document.getElementById(id);
	//Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
	if (activeSong.paused){
		activeSong.play();
	}else{
		activeSong.pause();
	}
}

function slideVolume() {
   var myVol = document.getElementById('volume').value/100;
   activeSong.volume = myVol;
   if (myVol == 0) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

function muteVolume(obj) {
   if (obj.checked == true) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

/*
Gets the percentage of the click on the slider to set the song position accordingly.
Source for Object event and offset: http://website-engineering.blogspot.com/2011/04/get-x-y-coordinates-relative-to-div-on.html
*/
function setSongPosition(obj,e){
	//Gets the offset from the left so it gets the exact location.
	var songSliderWidth = obj.offsetWidth;
	var evtobj=window.event? event : e;
	clickLocation = evtobj.layerX - obj.offsetLeft;
	
	var percentage = (clickLocation/songSliderWidth);
	//Sets the song location with the percentage.
	setLocation(percentage);
}