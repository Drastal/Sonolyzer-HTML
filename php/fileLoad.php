<?php

if(isset($_FILES["file"]["name"])){
    

    $allowedExts = array("mp3", "ogg", "wav");
    $temp = explode(".", $_FILES["file"]["name"]);
    $extension = end($temp);
    if ((($_FILES["file"]["type"] == "audio/mp3") || ($_FILES["file"]["type"] == "application/ogg") || ($_FILES["file"]["type"] == "audio/wav")) && in_array($extension, $allowedExts)) {
        if ($_FILES["file"]["error"] > 0) {
            echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
        } else {
//            echo "Upload: " . $_FILES["file"]["name"] . "<br>";
//            echo "Type: " . $_FILES["file"]["type"] . "<br>";
//            echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
//            echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
            
            $address = "upload/" . $_FILES["file"]["name"];
            $sound = "upload/" . $_FILES["file"]["name"];
            if (file_exists("upload/" . $_FILES["file"]["name"])) {
                $address = $_FILES["file"]["name"] . " already exists. ";
            } else {
                move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
                //echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
            }
        }
    } else {
        $address =  "Invalid file";
    }
}

?>