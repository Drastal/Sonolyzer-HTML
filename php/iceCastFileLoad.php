<?php

$sound = "";
$address = "Pas de fichier son charg&eacute;";
//Si une recherche a ete effectuee
if (isset($_POST['fileSearch'])) {
    //le son sera celui qui a ete demande
    $sound = htmlspecialchars($_POST['fileSearch']);
    //l'adresse correspondra � celle du fichier s�lectionne
    $address = htmlspecialchars($_POST['fileSearch']);
}


?>