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

$email = $_POST["cs1Email"];



// Insert the data into the SQL table
$sql = "INSERT INTO subscribers (email) VALUES ('$email')";

 


// Close the database connection
mysqli_close($conn);


if (mysqli_query($conn, $sql)) {
  echo "we will contact";
} else {
  echo "Error inserting record: " . mysqli_error($conn);
}




?>






 
 









?>