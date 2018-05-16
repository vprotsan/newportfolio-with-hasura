<?php

$msg = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    
    $myemail = $_POST['emailsignup']; 
      
    // Check that data was sent to the mailer. http_response_code: Gets or sets the HTTP response status code.
    if ( !filter_var($myemail, FILTER_VALIDATE_EMAIL)) {
        $msg = "Please enter a valid email";
        exit;
    }
  
    $to = 'mail@vprotsan.com';
    $subject = 'From  ' . $myemail . ' "Notify me" form';
    $message = "Add this email to 'Notify me' list:  " . $myemail;

    if (mail($to, $subject, $message)) { 
        $msg = "PHP";
    } else { 
        $msg = "There is a problem sending your form";
    }
           
}//end if request method 
   
?>