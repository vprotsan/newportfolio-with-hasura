

<?php
 $path = jQuery('#delete_file').data("path"); //we get the path of an image

 if ( !($_POST["path"]) ){ //checks of variable path has any data

   	if( unlink($_POST["path"]))
   	{
   		echo "deleted";
   	}
  }

?>