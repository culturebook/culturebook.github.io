<?php
  /*Database Settings*/
  
  // MySQL Host
  define('DB_HOST', 'localhost');
  // MySQL User
  define('DB_USER', 'zfadmin_db1');
  // MySQL Password
  define('DB_PASSWORD', 'korea8080');
  // MySQL Name
  define('DB_NAME', 'zfadmin_db1');
  
  $search = $_REQUEST['searchField'];
  
  echo ('<script type="text/javascript">var vaSearch="'.$search.'";</script>');
?>