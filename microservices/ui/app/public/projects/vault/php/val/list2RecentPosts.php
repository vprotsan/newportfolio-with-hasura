<?php
require("../new/connectOnce.php");

$sql = "SELECT * FROM GIGS ORDER BY date_created DESC LIMIT 2";

$rs = $conn->query($sql);
if ($rs == false) {
	trigger_error('Wrong SQL: ' . $sql . ' Error: ' . $conn_error, E_USER_ERROR);
}
else
{
	/* fetch associative array */
	while ( $arr = $rs->fetch_assoc() ) {
		echo "<li>";
			echo "<figure class=\"thumbnail\"><a href=\"/job-profile.php?id={$arr['gig_number']}\"><img src=\"./php/new/{$arr['image_path']}\" alt=\"\"></a></figure>";
			echo "<h5 class=\"title\"><a href=\"/job-profile.php?id={$arr['gig_number']}\">{$arr['gig_name']}</a></h5>";
			echo "<span class=\"date\">{$arr['date_created']}</span>";
		echo "</li>";		
	}

    /* free result set */
    $rs->free();
}
/* close connection */
$conn->close();

?>