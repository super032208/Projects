<?php 

// message vars

$msg = '';
$msgClass = '';


// check for submit
if(filter_has_var(INPUT_POST, 'submit')){
    // get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
  
    
// check required fields

if(!empty($email) && !empty($name) && !empty($message)){
// passed
if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
    $msg = 'Please use a valid email';
$msgClass = 'alert-danger';
}else{

    $toEmail = 'support@novaera.com';
    $subject = 'contact request From ' .$name;
    $body = '<h2> Contact Request </h2>
    <h4> Name </h4><p> '. $name .'</p>
    <h4> Email </h4><p> '. $email .'</p>
    <h4> Message </h4><p> '. $message .'</p>
    ';

    $headers = "MIME-Version: 1.0" . "\r\n";
    $msgClass .="Content-Type:text/html;charset=UTF-8" ."\r\n";

// additiona; header
$headers .= "From" .$name. "<" .$email. ">". "\r\n";

if(mail($toEmail, $subject, $body, $headers)){
    $msg = 'Your Email has been sent';
    $msgClass = 'alert-success';
}else{
    $msg = 'Your email was not sent';
    $msgClass = 'alert-danger';
}





}

}else {
// fail 

$msg = 'Please fill in all fields';
$msgClass = 'alert-danger';

}



}

?>



<!DOCTYPE html>
<html lang="en">
<head>
<title>Contact me </title>
    <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css">

</head>
<header>  <nav class="navbar navbar-default">
    <div class="container">
<?php  if($msg !=''): ?>
<div class="alert <?php  echo $msgClass; ?>"><?php echo $msg ?> </div>

<?php endif; ?>
    <div class="navbar-header">
    <a class="navbar-brand" href="index.php">My Website</a>
    </div>
    </nav></header>
<body>
   
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <div>
    <label>Name</label>
    <input type="text"  name="name" class="form-control" value="<?php echo isset($_POST['name'])? $name : ''; ?>">
    </div>
    <div class="form-group"> 
    <label >Email</label>
    <input  type="text"  name="email" class="form-control" value="<?php echo isset($_POST['email'])? $email : ''; ?>">
    </div>
    <div class="form-group"> 
    <label >Message</label>
    <textarea name="message" class="form-control"><?php echo isset($_POST['message'])? $message : ''; ?></textarea>
    </div>
    <br>
    <button type="submit" name="submit" class="btn btn-primary">Submit
    </button>


    </form>

    </div>    
    </nav>
</body>
</html>