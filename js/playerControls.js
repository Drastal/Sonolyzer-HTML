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

//Changes the volume up or down a specific number
function changeVolume(number, direction){
//Checks to see if the volume is at zero, if so it doesn't go any further.
	if(activeSong.volume >= 0 && direction == "down"){
		activeSong.volume = activeSong.volume - (number / 100);
	}
	//Checks to see if the volume is at one, if so it doesn't go any higher.
	if(activeSong.volume  <=1 && direction == "up"){
		activeSong.volume = activeSong.volume + (number / 100);
	}
	
	//Finds the percentage of the volume and sets the volume meter accordingly.
	var percentageOfVolume = activeSong.volume / 1;
	var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
	
	document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

function slideVolume() {
   var myVol = volumeRange.value;
   audio.volume = myVol;
   if (myVol == 0) {
	   audio.muted = true;
   } else {
	   audio.muted = false;
   }
}


//Set's volume as a percentage of total volume based off of user click.
function setVolume(percentage){
	activeSong.volume = percentage;
	
	var percentageOfVolume = activeSong.volume / 1;
	var percentageOfVolumeSlider = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;
	
	document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}
	
//Set's new volume id based off of the click on the volume bar.
function setNewVolume(obj,e){
	var volumeSliderWidth = obj.offsetWidth;
	var evtobj = window.event? event: e;
	clickLocation = evtobj.layerX - obj.offsetLeft;
	
	var percentage = (clickLocation/volumeSliderWidth);
	setVolume(percentage);
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