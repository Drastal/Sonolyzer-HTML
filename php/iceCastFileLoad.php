<?php
$sound="";
$address="Pas de fichier son charg&eacute;";
//Si une recherchea �t� effectu�e
if (isset($_POST['fileSearch']))
{
    //le son sera celui qui a �t� demand�
    $sound=htmlspecialchars($_POST['fileSearch']);
    //l'adresse correspondra � celle du fichier s�lectionn�
    $address=htmlspecialchars($_POST['fileSearch']);
   
}

?>