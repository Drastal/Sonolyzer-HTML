<?php

$sound = "";
$address = "Chargez une piste sonore";
//Si une recherche a ete effectuee
if (isset($_POST['fileSearch'])) {
    //le son sera celui qui a ete demande
    $sound = htmlspecialchars($_POST['fileSearch']);
    //l'adresse correspondra a celle du fichier selectionne
    $address = htmlspecialchars($_POST['fileSearch']);
}
?>