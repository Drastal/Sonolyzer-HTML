<?php

//Les utilisateurs ont tous les droits sur le fichier
chmod('txt/fileList.txt', 0777);

//Fonction qui permet de recuperer l'historique des fichiers charges
function getHistory() {
    if (isset($_POST['fileSearch'])) {
        updateHistory(htmlspecialchars($_POST['fileSearch']));
    } else if (isset($_FILES["file"]["name"])) {
        updateHistory("upload/" . $_FILES["file"]["name"]);
    }
    //Troncature de l'historique a la bonne longueur
    truncateHistory();

    $lines = file('txt/fileList.txt');

    //Affichage de chaque ligne du fichier
    foreach ($lines as $line) {
        echo "<li>" . $line . "</li>";
    }
}

function updateHistory($new_entry) {
    $file = fopen('txt/fileList.txt', 'r+') or exit("Unable to open file!");
    $oldContents = file_get_contents('txt/fileList.txt');

    $newmsg = $new_entry . "\n" . $oldContents;
    file_put_contents('txt/fileList.txt', $newmsg);
    fclose($file);
}

//Fonction qui permet de tronquer l'historique au nombre d'entrees voulu
function truncateHistory() {

    $file = fopen('txt/fileList.txt', 'r+') or exit("Unable to open file!");
//Compteur de lignes
    $cpt = 0;
//Nombre d'entrees souhaite
    $history = 5;
//Nouvelle longueur du fichier (nombre de caracteres)
    $new_length = 0;

//Tant que l'on n'a pas atteint la fin du fichier ou tant que l'on n'a pas
//atteint le nombre d'entrees voulu
    while (!feof($file) && $cpt < $history) {
//On ajoute la longueur de la ligne au compteur de caracteres
        $new_length = $new_length + strlen(fgets($file));
//On passe a la ligne suivante
        $cpt++;
    }

//Troncature du fichier au nombre de lignes ( = nombre d'entrees) voulu
    ftruncate($file, $new_length);
    fclose($file);
}

?>