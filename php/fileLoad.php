<?php

//Si un fichier a ete selectionne
if(isset($_FILES["file"]["name"])){
    
    //liste des extensions autorises
    $allowedExts = array("mp3", "ogg", "wav");
    //recuperation de l'extension du fichier selectionne
    $temp = explode(".", $_FILES["file"]["name"]);
    $extension = end($temp);
    //verification si l'extension est prise en charge
    if ((($_FILES["file"]["type"] == "audio/mp3") || ($_FILES["file"]["type"] == "application/ogg") || ($_FILES["file"]["type"] == "audio/wav")) && in_array($extension, $allowedExts)) {
        //s'il y a une erreur
        if ($_FILES["file"]["error"] > 0) {
            echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
        } else {
            //mise a jour de l'adresse et du son avec le fichier selectionne
            $address = "upload/" . $_FILES["file"]["name"];
            $sound = "upload/" . $_FILES["file"]["name"];
            //si le fichier existe deja dans le dossier de destination, impossible d'uploader
            if (file_exists("upload/" . $_FILES["file"]["name"])) {
                $address = $_FILES["file"]["name"] . " already exists. ";
            } else {
                //deplacer le fichier uploade dans le dossier de destination
                move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
            }
        }
    //si le fichier selectionne n'a pas la bonne extension
    } else {
        $address =  "Invalid file";
    }
}

?>