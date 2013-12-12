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

            <a href="#settings" class="icon"><img src="img/settings.png" alt="settings" /></a>
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