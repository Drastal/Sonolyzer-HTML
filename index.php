<?php
include('php/iceCastFileLoad.php');

?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sonolyzer</title>
        <link href="css/reset.css" rel="stylesheet" media="screen">
        <link href="css/template.css" rel="stylesheet" media="screen">
        <link href="css/components.css" rel="stylesheet" media="screen">
        <link href="css/modals.css" rel="stylesheet" media="screen"> 
        <link href="css/player.css" rel="stylesheet" media="screen">
        
    </head>
    <body>
        <header>
            <div class="appName">
                <h1><a href="index.php">Sonolyzer</a></h1>
            </div>
            
            <a href="#help" class="icon"><img src="img/help.png" /></a>
            <div id="help" class="modal">
                <div class="popup">
                    <div class="header">
                            <h2>Aide</h2>
                    </div>
                    <div class="content">
                        <h3>&Agrave; propos</h3>
                        <p>Va falloir une fine plume les gens</p>
                        <h3>Charger une bande sonore</h3>
                        <p>Ici aussi, de toute évidence</p>
                        <h3>Lecteur audio</h3>
                        <p>Vous connaissez la chanson</p>
                        <h3>Filtres</h3>
                        <p>On r'met &ccedil;a ?</p>
                        <h3>Export</h3>
                        <p>Une autre patron</p>
                    </div>
                    <div class="footer">
                        <a href="#" class="closeButton">Fermer</a>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
            
            <a href="#settings" class="icon"><img src="img/settings.png" /></a>
            <div id="settings" class="modal">
                <div class="popup">
                    <div class="header">
                        <h2>Param&egrave;tres</h2>
                    </div>
                    <div class="content">
                        <h3>G&eacute;n&eacute;rales</h3>
                        <p>Couleur, etc...</p>
                        <h3>Fitres</h3>
                        <p>Que met-on ?</p>
                    </div>
                    <div class="footer">
                        <a href="#" class="closeButton">Fermer</a>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>
        </header>

		<div class="main">
            <div class="fileManagerBand">
                <aside class="left">
                    <form id="searchFile" class="icon" method="post" action="index.php">
                        <input type="search" name="fileSearch" placeholder="     Source sonore"/>
                        <input type="submit" hidden/>
                    </form>
                    <a href="#" class="icon"><img src="img/reload.png" /></a>
                </aside>
                <aside class="right">
                    <a href="#"><p class="address"><?php echo $address?></p></a>
                </aside>
            </div>

			<div class="panels">
                <aside class="left">
                    <section class="filters">
                        <div class="filterType">
                            <h3 class="filterTitle">Voix</h3>
                            <div class="doubleFilter">
                            	<span class="choiceLeft">
                                	Intensifier
                                </span>
                                <span class="switchTwin">
                                    <div class="switch">
                                        <input type="checkbox" name="voiceLevel" class="switch-checkbox" id="voiceLevel" onchange="voice_filter()">
                                        <label class="switch-label" for="voiceLevel">
                                            <div class="switch-inner"></div>
                                            <div class="switch-switch"></div>
                                        </label>
                                    </div>
                                </span>
                                <span class="choiceRight">
                                	R&eacute;duire
                                </span>
                                <span class="activeFilter">
                                    <input type="checkbox" value="None" id="activeLevel" name="activeVoice" onchange="voice_filter()"/>
                                    <label for="activeLevel"></label>
                                </span>
                            </div>
                            <div class="doubleFilter">
                            	<span class="choiceLeft">
                                	Aigues
                                </span>
                                <span class="switchTwin">
                                    <div class="switch">
                                        <input type="checkbox" name="voiceType" class="switch-checkbox" id="voiceType" onchange="voice_filter()">
                                        <label class="switch-label" for="voiceType">
                                            <div class="switch-inner"></div>
                                            <div class="switch-switch"></div>
                                        </label>
                                    </div>
                                </span>
                                <span class="choiceRight">
                                	Graves
                                </span>
                                <span class="activeFilter">
                                    <input type="checkbox" value="None" id="activeType" name="activeVoice" onchange="voice_filter()" />
                                    <label for="activeType"></label>
                                </span>
                            </div>
                        </div>
                        <div class="filterNoise">
                            <h3 class="filterTitle">R&eacute;duction de bruit</h3>
                            <div class="singleFilter">
                            	<span class="label">
                                	Interf&eacute;rences GSM
                                </span>
                                <span class="checkBox">
                                    <span class="activeFilter">
                                        <input type="checkbox" value="None" id="activeGSM" name="activeGSM" onchange="noise_activeGSM_checked()" />
                                        <label for="activeGSM"></label>
                                    </span>
                                </span>
                            </div>
                            
                        </div>
                        <div class="filterType">
                            <h3 class="filterTitle">Personnalis&eacute;s</h3>
                            <div class="doubleFilter">
                                <span class="choiceLeft">
                                    Passe-haut
                                </span>
                                <span class="switchTwin">
                                    <div class="switch">
                                        <input type="checkbox" name="passeFilter" class="switch-checkbox" id="passeFilter">
                                        <label class="switch-label" for="passeFilter">
                                            <div class="switch-inner"></div>
                                            <div class="switch-switch"></div>
                                        </label>
                                    </div>
                                </span>
                                <span class="choiceRight">
                                    Passe-bas
                                </span>
                                <span class="activeFilter">
                                    <input type="checkbox" value="None" id="activePass" name="activePerso" onChange="checkboxMax1(this,'activePerso')" />
                                    <label for="activePass"></label>
                                </span>
                            </div>
                            <div class="frequencyRange">
                                <form oninput="amount.value=rangePass.value">

                                    <input type="range" class="horizon" id="rangePass" name="rangePass" value="50" min="20" max="3000" step="10" onchange="filtremono()">

                                    <span class="smallerToRight">
                                    	f<sub>C</sub> = 
                                        <div class="output">
                                        	<output name="amount" for="rangePass">?</output>
                                        </div>
                                        kHz
                                    </span>
                                </form>
                            </div>
                            <div class="doubleFilter">
                                <span class="choiceLeft">
                                    Passe-bande
                                </span>
                                <span class="switchTwin">
                                    <div class="switch">
                                        <input type="checkbox" name="bandeFilter" class="switch-checkbox" id="bandeFilter">
                                        <label class="switch-label" for="bandeFilter">
                                            <div class="switch-inner"></div>
                                            <div class="switch-switch"></div>
                                        </label>
                                    </div>
                                </span>
                                <span class="choiceRight">
                                    Coupe-bande
                                </span>
                                <span class="activeFilter">
                                    <input type="checkbox" value="None" id="activeBand" name="activePerso" onChange="checkboxMax1(this,'activePerso')" />
                                    <label for="activeBand"></label>
                                </span>
                            </div>
                            <div class="frequencyRange">
                                <form oninput="amount.value=rangeLowBand.value">
                                    <input type="range" class="horizon" id="rangeLowBand" name="rangeLowBand" value="50" min="20" max="3000" step="10">
                                    <span class="smallerToRight">
                                    	f<sub>Cb</sub> = 
                                        <div class="output">
                                        	<output name="amount" for="rangeLowBand">?</output>
                                        </div>
                                        kHz
                                    </span>
                                </form>
                            </div>
                            <div class="frequencyRange">
                                <form oninput="amount.value=rangeHighBand.value">
                                    <input type="range" class="horizon" id="rangeHighBand" name="rangeHighBand" value="50" min="20" max="3000" step="10">
                                    <span class="smallerToRight">
                                    	f<sub>Ch</sub> = 
                                        <div class="output">
                                        	<output name="amount" for="rangeHighBand">?</output>
                                        </div>
                                        kHz
                                    </span>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section class="export">
                        <a href="#"><p>
                            EXPORT
                        </p></a>
                    </section>
                </aside>
                
                <aside class="right">
                    <section class="player">
                        <span class="controls">
                            <div class="play">
                                <input type="checkbox" value="None" id="play" name="play" onChange="playPause('song')" />
                                <label for="play"></label>
                            </div>
                            <div class="volumeControl">
                                <form oninput="amount.value=volume.value">
                                    <span class="volumeMuter">
                                        <input type="checkbox" value="None" id="mute" name="mute" onChange="muteVolume(this)" />
                                        <label for="mute"></label>
                                    </span>
                                    <span class="volumeSlider">
                                        <input type="range" class="horizon" min="0" max="100" step="1" value="100" id="volume" name="volume" onchange="slideVolume()">
                                    </span>
                                    <span class="volumeLevel">
                                        <output name="amount" for="volume">&nbsp;</output>
                                    </span>
                                </form>
                            </div>
                        </span>
                        <span class="songSlider">
                            <input type="range" step="any" id="seekbar" onchange="ChangeTheTime()">
                        </span>
                        <span class="songTimer">
                            <label id="currentTime">--:--</label>
                            <br />
                            <label id="totalTime"></label>
                        </span>
                    	<audio id="song" ontimeupdate="updateTime()" preload="auto" loop>
                        	<source type="audio/mpeg" <?php echo "src = ".$sound ?>>
                            <!--<source type="audio/mpeg" src="http://streaming.radio.rtl.fr/rtl-1-44-96">-->
                            <!--<source type="audio/mpeg" src="http://broadcast.infomaniak.net:80/alouette-high.mp3">-->
                        </audio>
                    </section>
                    
                    <section class="spectrum">      
				<canvas id="canvas" width="1000" height="325" style="display: block;margin-right: auto; margin-left: auto;">Spectre du signal audio</canvas>		
                    </section>
                    
                    <section class="platine">
                        <p>
                        	Platine
                        </p>
                    </section>
                </aside>
            </div>
		</div>

		<footer>
			<!-- Contenu du footer -->
		</footer>
        
        <!-- Scripts JavaScript -->
         <!-- Filtres de la voix-->
        <script type="text/javascript" src="js/voiceFilter.js"></script>
        <script type="text/javascript" src="js/voiceFilterCheckControl.js"></script>
        
        <script type="text/javascript" src="js/checkboxChecker.js"></script>
        <script type="text/javascript" src="js/playerControls.js"></script>
        <script type="text/javascript" src="js/setAudioNode.js"></script>
        
           
        
            <!-- Filtres du bruit-->
        <script type="text/javascript" src="js/noiseFilter.js"></script>
        
            <!-- Spectre-->
        <script type="text/javascript" src="js/spectrum.js"></script>
        
            <!-- Filtres Persos-->
        <<script type="text/javascript" src="js/filtrespersos.js"></script>
	</body>
</html>