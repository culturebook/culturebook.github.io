<?php

$EmailFrom = Trim(stripslashes($_POST['email']));
$EmailTo = "calum@culturebook.co.uk";
$Subject = "Culturebook";
$Name = Trim(stripslashes($_POST['name'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['thoughts'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  //print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
  print "Thank you! We appreciate your interest and will be in contact soon."
}
else{
  //print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  print "Sorry there was a problem submitting the form, please go back"
}
?>