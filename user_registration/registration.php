<!DOCTYPE html>

<?php
if(isset($_POST['create'])){
    echo 'User Submitted';
}

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User Registration in PHP!!!!</title>
</head>
<body>


    
<div>
<form action="registration.php" method="POST">

<div class="container">
<h1>Registration</h1>
<p>Fill up the from with the correct values</p>


<label for="firstname"><b>First Name</b>   </label>
<input type="text" name="firstname" required>

<label for="lastname"><b>Last Name</b>   </label>
<input type="text" name="lastname" required>

<label for="email"><b>Email Address</b>   </label>
<input type="email" name="email" required>

<label for="phonenumber"><b>Phone Number</b>   </label>
<input type="text" name="phonenumber" required>

<label for="password"><b>Password</b>   </label>
<input type="password" name="password" required>

<input type="submit" name="create" value="Sign Up">

</div>


</form>


</div>


</body>
</html>