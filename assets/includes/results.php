<?php
	while ($row = mysql_fetch_array($data)){
		$dbc_exhibitID = $row['exhibitID'];
		$dbc_exhibitNAME = $row['exhibitNAME'];
		$dbc_exhibitIMAGE = $row['exhibitIMAGE'];
		
  		echo "<div class='exhibit'><a href='exhibit.php?exhibitID=".$dbc_exhibitID."'><img src='".$dbc_exhibitIMAGE."' alt='Exhibit 9' width='100' height='100'></a>";
   		echo "<div class='title'><a href='exhibit.php?exhibitID=".$dbc_exhibitID."'>".$dbc_exhibitNAME."</a></div>";
    	echo "<div class='contents'>";
	  $query_museum = "SELECT museumNAME FROM cb_museums JOIN cb_museumhasexhibit ON cb_museums.museumID = cb_museumhasexhibit.museumID WHERE cb_museumhasexhibit.exhibitID = $dbc_exhibitID";
	  $data_museum = mysql_query($query_museum);
	  while ($row = mysql_fetch_array($data_museum)){
	  	$dbc_museumNAME = $row['museumNAME'];
	  	echo "<p><a href='#'>".$dbc_museumNAME."</a></p>";
		}
      	echo "<p>56 Contributions | 1 User Collections</p>";
      	echo "<p><a class='indent share' href='#'>Share</a></p>";
    	echo "</div>";
  		echo "</div>";
  		echo "<div class='division2'></div>";
	}
	mysql_close($dbc);
?>