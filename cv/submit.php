<?php 
// Email configuration 
$toEmail = 'admin@example.com'; 
$fromName = 'Sender Name'; 
$formEmail = 'sender@example.com'; 
 
$postData = $statusMsg = $valErr = ''; 
$status = 'error'; 
 
// If the form is submitted 
if(isset($_POST['submit'])){ 
    // Get the submitted form data 
    $postData = $_POST; 
    $Name = trim($_POST['Name']); 
    $Email = trim($_POST['Email']); 
    $Subject = trim($_POST['Subject']); 
    $Message = trim($_POST['Message']); 
     
    // Validate form fields 
    if(empty($Name)){ 
         $valErr .= 'Please enter your name.<br/>'; 
    } 
    if(empty($Email) || filter_var($Email, FILTER_VALIDATE_EMAIL) === false){ 
        $valErr .= 'Please enter a valid email.<br/>'; 
    } 
    if(empty($Subject)){ 
        $valErr .= 'Please enter subject.<br/>'; 
    } 
    if(empty($Message)){ 
        $valErr .= 'Please enter your message.<br/>'; 
    } 
     
    if(empty($valErr)){ 
        // Send email notification to the site admin 
        $Subject = 'New contact request submitted'; 
        $htmlContent = " 
            <h2>Contact Request Details</h2> 
            <p><b>Name: </b>".$name."</p> 
            <p><b>Email: </b>".$email."</p> 
            <p><b>Subject: </b>".$subject."</p> 
            <p><b>Message: </b>".$message."</p> 
        "; 
         
        // Always set content-type when sending HTML email 
        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
        // Header for sender info 
        $headers .= 'From:'.$fromName.' <'.$formEmail.'>' . "\r\n"; 
         
        // Send email 
        @mail($toEmail, $Subject, $htmlContent, $headers); 
         
        $status = 'success'; 
        $statusMsg = 'Thank you! Your contact request has submitted successfully, we will get back to you soon.'; 
        $postData = ''; 
    }else{ 
        $statusMsg = '<p>Please fill all the mandatory fields:</p>'.trim($valErr, '<br/>'); 
    } 
}