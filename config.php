<?php

 
// Create connection
 
// Connect to the database
$servername = "localhost";
$database = "u284314170_takfildb";
$username = "u284314170_takfil";
$password = "Takfil/2023";
$conn = mysqli_connect($servername, $username, $password, $database);

// Check for errors
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Insert the data into the SQL table
$sql = "INSERT INTO contact (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
if (mysqli_query($conn, $sql)) {
  echo "we will contact";
} else {
  echo "Error inserting record: " . mysqli_error($conn);
}


$EmailTo = "contact@takfil.net";
$Subject = "Message from " . $name;
 
// prepare email body text
$Body = "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Phone Number: ";
$Body .= $phone;
$Body .= "\n";
  
  
$Body .= "Message : ";
$Body .= $message;
$Body .= "\n";  
  
  
  
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email, );

// Close the database connection
mysqli_close($conn);



header('Location: /');

?>






 
 









?>