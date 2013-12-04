// JavaScript Document

var activeSong;
var seekbar = document.getElementById('seekbar');

function play(id){
        //Lecture de la source audio dans la balise audio
        activeSong = document.getElementById(id);
        activeSong.play();
}

function pause(){
        //Pause de la source audio dans la balise audio
        activeSong.pause();
}

function playPause(id){
        //Lance ou stop la lecture du son à l'appui du bonton en fonction de l'etat actuel de lecture
        activeSong = document.getElementById(id);
		
        if (activeSong.paused){
                activeSong.play();
        }else{
                activeSong.pause();
        }
	
	//Mise a jour constante du temps de lecture et de la barre de progression
	activeSong.addEventListener('timeupdate', UpdateTheTime, false);
	activeSong.addEventListener('durationchange', SetSeekBar, false);
	
	//Si bande-son en local (ie, pas un flux), afficher la duree de celle-ci
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

// Affecte la valeur du range au niveau du volume
function slideVolume() {
   var myVol = document.getElementById('volume').value/100;
   activeSong.volume = myVol;
   if (myVol == 0) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

// Desactive le volume (mute)
function muteVolume(obj) {
   if (obj.checked == true) {
	   activeSong.muted = true;
   } else {
	   activeSong.muted = false;
   }
}

// Definit le debut et la fin de la barre de progression
function SetSeekBar() {
	seekbar.min = 0;
	seekbar.max = activeSong.duration;
}

// Continue la lecture au niveau choisi sur la barre de progression
function ChangeTheTime() {
	activeSong.currentTime = seekbar.value;
}

//Mise a jour du temps de lecture
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