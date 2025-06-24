<?php
$connectDB = new mysqli("localhost", "root", "Vsnl@123", "office_management_system");

// Check connection
if ($connectDB->connect_error) {
    die("Connection failed: " . $connectDB->connect_error);
}
?>