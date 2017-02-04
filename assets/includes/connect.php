<?php
/*Database Connection*/

	// Connect to database
	$dbc = mysql_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  
	// Encoding set to UTF-8 for database encryption
	mysql_query("SET NAMES 'utf8'");
	
	// Select database for use and check valid connection
	$db = mysql_select_db(DB_NAME) or die("Unable to select database");
	
	if(!$dbc || !$dbc) die('<h1>Error establishing a database connection</h1>');
?>