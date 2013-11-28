// JavaScript Document

var activeSong = document.getElementById(song);
var seekbar = document.getElementById('seekbar');

function play(id){
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
	
	activeSong.addEventListener('timeupdate', UpdateTheTime, false);
	activeSong.addEventListener('durationchange', SetSeekBar, false);
	
	if(!isNaN(parseFloat(activeSong.duration)) && isFinite(activeSong.duration)){
		var sec2 = activeSong.duration;
		sec2 = sec2 % 3600;
		var min2 = Math.floor(sec2 / 60);
		sec2 = Math.floor(sec2 % 60);
		if (sec2.toString().length < 2) sec2 = "0" + sec2;
		if (min2.toString().length < 2) min2 = "0" + min2;
		document.getElementById('totalTime').innerHTML = min2 + ":" + sec2;
	} else {
		document.getElementById('totalTime').innerHTML = "";
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

// fires when page loads, it sets the min and max range of the video
function SetSeekBar() {
	seekbar.min = 0;
	seekbar.max = activeSong.duration;
}

// fires when seekbar is changed
function ChangeTheTime() {
	activeSong.currentTime = seekbar.value;
}



// executes when audio plays and the time is updated in the audio element, this writes the current duration elapsed in the label element

function UpdateTheTime() {
	var sec = activeSong.currentTime;
	sec = sec % 3600;
	var min = Math.floor(sec / 60);
	sec = Math.floor(sec % 60);
	if (sec.toString().length < 2) sec = "0" + sec;
	if (min.toString().length < 2) min = "0" + min;
	document.getElementById('currentTime').innerHTML = min + ":" + sec;
	seekbar.min = activeSong.startTime;
	seekbar.max = activeSong.duration;
	seekbar.value = activeSong.currentTime;
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