<?php
$sound="";
$address="Pas de fichier son charg&eacute;";
//Si une recherchea été effectuée
if (isset($_POST['fileSearch']))
{
    //le son sera celui qui a été demandé
    $sound=htmlspecialchars($_POST['fileSearch']);
    //l'adresse correspondra à celle du fichier sélectionné
    $address=htmlspecialchars($_POST['fileSearch']);
   
}

?>