<?php
 if ( !($_POST["path"]) ){ //checks of variable path has any data

   	if( unlink($_POST["path"]))
   	{
   		echo "deleted";
   	}
  }

?>