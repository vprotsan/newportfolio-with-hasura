<?php

//if file is set
if(isset($_FILES["file"])){

$validextensions = array("jpeg", "jpg", "png");
$temporary = explode(".", $_FILES["file"]["name"]);
$file_extension = end($temporary);

//if file/image has the right extention and not too big
    if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")) && ($_FILES["file"]["size"] < 1000000)//Approx. 100kb files can be uploaded.
    && in_array($file_extension, $validextensions)) 
    {

      //and if file exists
        if ($_FILES["file"]["error"] > 0){

          //if there is an error
          //return error
            echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
        } else {

              //if no error with the file
              //checks if file already exists
              if (file_exists("upload/" . $_FILES["file"]["name"])) {
                  echo $_FILES["file"]["name"] . " <span id='invalid'><b>Already exists.</b></span> ";
              } else {

                  //if no eror in file and it does exist
                  $sourcePath = $_FILES['file']['tmp_name']; // Storing source path of the file in a variable
                  $path = "upload/".$_FILES['file']['name']; // Target path where file is to be stored
                  move_uploaded_file($sourcePath,$path) ; // Moving Uploaded file

                  echo '<div class="col-xs-3 added-imahe-container">

                                <div class="added-image image-placeholder">
                                <img id="previewing" src="'. $path .'"></div>

                          <div class="actions">  
                                <div>                             
                                      <button id="remove_button" name="delete_file" data-path="'. $path .'" type="button">X</button>
                                </div>
                                 <div>
                                      <label>profile picture</label>
                                      <input type="checkbox">
                                </div>
                          </div>';
                  
              }
        }
    } else {
      //if file is not the right size or type
      //returns error message
      echo "<span id='invalid'>***Invalid file Size or Type***<span>";
    }
}



