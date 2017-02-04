<?php

if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "calum@culturebook.co.uk";
    $email_subject = "Culturebook";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['robotest1']) ||
        !isset($_POST['robotest2']) ||
        !isset($_POST['name']) ||
        !isset($_POST['email']) ) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $client_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['thoughts']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$client_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  if(strlen($_POST['robotest1']) > 0) {
    $error_message .= 'Invalid Submission.<br />';
  }
  if($_POST['robotest2'] != 'Leave Alone') {
    $error_message .= 'Invalid Submission.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }


    // PREPARE THE BODY OF THE MESSAGE
    $proj_message = '<html><body>';
    $proj_message .= '<h1>Culturebook</h1>';
    $proj_message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $proj_message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>".clean_string($client_name)."</td></tr>";
    $proj_message .= "<tr><td><strong>Email:</strong> </td><td>".clean_string($email_from)."</td></tr>";
    $proj_message .= "<tr><td><strong>Message:</strong> </td><td>".nl2br(strip_tags($message))."</td></tr>";
    $proj_message .= "</table>";
    $proj_message .= "</body></html>";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'Content-Type: text/html; charset=ISO-8859-1\r\n' .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $proj_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you! We appreciate your interest and will be in contact soon.
 
<?php
}
?>