<?php
	include('php/iceCastFileLoad.php');
	include('php/fileLoad.php');
	include('php/historyManager.php');
?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sonolyzer</title>
        <link rel="icon" type="image/png" href="img/favicon.png">
        <link href="css/reset.css" rel="stylesheet" media="screen">
        <link href="css/template.css" rel="stylesheet" media="screen">
        <link href="css/components.css" rel="stylesheet" media="screen">
        <link href="css/modals.css" rel="stylesheet" media="screen"> 
        <link href="css/player.css" rel="stylesheet" media="screen">
    </head>
    
    <body>
        <header>
            <div class="appName">
                <h1><a href="index.php"> Sonolyzer </a></h1>
            </div>

            <a href="#help" class="icon"><img src="img/help.png" alt="help"/></a>
            <div id="help" class="modal">
                <div class="popup">
                    <div class="header">
                        <h2>Aide</h2>
                    </div>
                    <div class="content">
                        <h3>&Agrave; propos</h3>
                        <p>
                        	Le projet Sonolyzer a &eacute;t&eacute; r&eacute;alis&eacute; dans le cadre d'un projet d'&eacute;tudiant EPF en option Management des Syst&egrave;mes d'information. <br/>Conçu et r&eacute;alis&eacute; au sein d'un syst&egrave;me exploitation libre, Sonolyzer est &agrave; la fois capable de travailler sur un flux audio de format MP3 import&eacute; d'un serveur IceCast et depuis un fichier local.
                        </p>
                        
                        <h3>Charger une bande sonore</h3>
                        <p>
                        	Afin de charger votre flux audio, vous avez deux possibilit&eacute;s : <\br> Flux IceCast : Passez votre curseur sur la loupe qui se trouve &agrave; gauche dans le bandeau bleu horizontal. Entrez ensuite le nom de votre flux audio. <\br> Flux en local : Cliquez sur "l'icone dossier", une fen&ecirc;tre s'ouvre et vous pouvez ainsi s&eacute;lectionner le nom de votre fichier audio.
                        </p>
                        
                        <h3>Lecteur audio</h3>
                        <p>
                        	Le lecteur audio poss&egrave;de une interface graphique permettant de lire des fichiers audio. Il vous suffit de cliquer sur les icones d'arr&ecirc;t, de marche ou de pause pour effectuer les actions correspondantes.
                        </p>
                        
                        <h3>Filtres</h3>
                        <p>
                        	Les filtres applicables à votre bande sonore se trouvent sur le bandeau lat&eacute;rale gauche de Sonolyzer. Vous avez la possibilit&eacute; de :
                            <ul>
								<li>Travailler sur la voix</li>
								<li>R&eacute;duire les bruits</li>
								<li>Personnaliser les filtres selon les fr&eacute;quences que vous d&eacute;sirez </li>
							</ul>
							
                            <br />
                            Afin d'activer les filtres, cochez la case bleue et faites glisser le curseur &agrave; droite ou &agrave; gauche suivant le type de filtre que vous d&eacute;sirez.
                        </p>
                        
                    </div>
                    <div class="footer">
                        <a href="#" class="closeButton">Fermer</a>
                    </div>
                </div>
                <div class="overlay"></div>
            </div>

            <!--<a href="#settings" class="icon"><img src="img/settings.png" alt="settings" /></a>
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
            </div>-->
        </header>