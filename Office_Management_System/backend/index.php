<?php
include 'config/database.php'; // Make sure the path is correct

$sql = "SELECT * FROM employee"; // Example query
$result = $connectDB->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row['column_name']; // Replace column_name with your actual column
    }
} else {
    echo "No results";
}
?>
