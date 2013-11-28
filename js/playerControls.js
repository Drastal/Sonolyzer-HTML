// JavaScript Document

var activeSong;
var seekbar = document.getElementById('seekbar');

function play(id){
        //Sets the active song to the song being played. All other functions depend on this.
        activeSong = document.getElementById(id);
        //Plays the song defined in the audio tag.
        activeSong.play();
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
	
	//Update everytime the elapsed time and progress bar
	activeSong.addEventListener('timeupdate', UpdateTheTime, false);
	activeSong.addEventListener('durationchange', SetSeekBar, false);
	
	//Show the total duration if possible
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

// Set the choosen volume value with the range
function slideVolume() {
   var myVol = document.getElementById('volume').value/100;
   activeSong.volume = myVol;
   if (myVol == 0) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

// Disable the volume
function muteVolume(obj) {
   if (obj.checked == true) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

// Setting the min and max range of the audio
function SetSeekBar() {
	seekbar.min = 0;
	seekbar.max = activeSong.duration;
}

// fires when seekbar is changed
function ChangeTheTime() {
	activeSong.currentTime = seekbar.value;
}

//Update the elapsed time
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