<?php
  
use \google\appengine\api\mail\Message;
ini_set('display_errors', 'On');
error_reporting(E_ALL);

ob_start();

  if(!isset($_POST['message']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
  foreach ($_POST as $key => $value)
      echo "Field ".htmlspecialchars($key)." is ".htmlspecialchars($value)."<br>";
 
  exit(1);
}


$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit(1);
}

$email_from = 'ashish@ashishkumar.org';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name with email id $visitor_email \n".
    "Here is the message:\n $message \n\n\n".
        
$to = "ashish@ashishkumar.org";//<== update the email address

    
try
{
   $message = new message();
   $message->setSender($email_from);
   $message->addTo($to);
   $message->setSubject($email_subject);
   $message->setTextBody($email_body);
   $message->send();
}
catch (InvalidArgumentException $e)
{
  // To add
}


//mail() not supported on GAE
//mail($to,$email_subject,$email_body,$headers);
//done. redirect to main page.
header('Location: index.php');

exit(0);


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
  
?>