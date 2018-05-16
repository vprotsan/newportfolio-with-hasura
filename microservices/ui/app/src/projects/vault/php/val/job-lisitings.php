<?php

$sql = "SELECT * FROM GIGS";
$wheretext = " WHERE gig_filled = 0"; // not filled yet
if ( isset($_GET["search_keywords"]) ) {
	$Keywords = $_GET['search_keywords'];
	if ($Keywords != "") {
		$Keywords = " gig_description like '%" . $Keywords . "%' ";
		if ($wheretext != "") {
			$wheretext .= " AND " . $Keywords;
		}
	}
}
if ( isset($_GET["search_location"]) ) {
	$Location = $_GET['search_location'];
	if ($Location != "") {
		$Location = " location like '%" . $Location . "%' ";
		if ($wheretext != "") {
			$wheretext .= " AND " . $Location;
		}
		else
		{
		$wheretext = " WHERE {$Location} ";
		}
	}
}
if ( isset($_GET["search_genre"]) ) 
{
	$Genre = $_GET['search_genre'];
	if ( ($Genre != "") and ($Genre != "All") ){
		$Genre = " genre like '%" . $Genre . "%' or genre = \"All\" ";
		if ($wheretext != "") {
			$wheretext .= " AND " . $Genre;
		}
		else
		{
		$wheretext = " WHERE {$Genre} ";
		}
	}
}
$sql = $sql . $wheretext;

$rs = $conn->query($sql);
if ($rs == false) {
	header("Location: /404.php");
	echo 'Wrong SQL: ' . $sql . ' Error: ' . $conn_error, E_USER_ERROR;
}
else
{
	$rows_returned = $rs->num_rows;
	if ($rows_returned > 0)
	{
	echo("<br/>");
	echo("<ul class=\"job_listings\">");
	while ($arr = $rs->fetch_assoc()) {
		echo("<br/>");
		echo("<li class=\"row job_listing\">");
			if(isset($_SESSION['username'])) // only if you're logged in can you see the job
			{
				echo("<a href=\"/job-profile.php?id={$arr['gig_number']}\">");
			}
			else
			{
				echo("<a href=\"/login.php\">");
			}
				echo("<div class=\"col-xs-4 job_img\">");
					if ($arr['image_path'] == NULL)
					{
						echo("<figure class=\"venue-profile-photo\"><img src=\"images/samples/person1.jpg\" alt=\"\" class=\"company_logo\"></figure>");
					}
					else
					{
						echo("<figure class=\"venue-profile-photo\"><img src=\"./php/new/{$arr['image_path']}\" alt=\"\" class=\"company_logo\"></figure>");
					}
				//echo("</div>");
				//echo("<div class=\"position\">");
					echo("<h3 class=\"name\">{$arr['gig_name']}</h3>");
					echo("<p class=\"type\">{$arr['gig_description']}</p>");
				echo("</div>");
				echo("<div class=\"col-xs-4 location\">");
					echo("<address>{$arr['location']}</address");
				echo("</div>");
				echo("<ul class=\"col-xs-4 meta\">");
					echo("<li class=\"job-type title\">{$arr['genre']}</li>");
					echo("<li class=\"time\">");
						echo("Posted <time>{$arr['date_created']}</time>");
					echo("</li>");
				echo("</ul>");
			echo("</a>");
		echo("</li>");
	}
	echo("</ul>");
	}
	else
	{
		echo("<strong>No Gigs Found With That Search</strong>");
	}
    /* free result set */
    $rs->free();
}
/* close connection */
$conn->close();

?>