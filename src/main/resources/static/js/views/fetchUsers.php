<?php

include "config.php";

$return_arr = array();

$query = "SELECT * FROM `users`";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $username = $row['username'];
    $password = $row['password'];
    $email = $row['email'];
    $roll = $row['roll'];

    $return_arr[] = array("id" => $id,
        "username" => $username,
        "password" => $password,
        "email" => $email,
        "roll" => $roll);
}

echo json_encode($return_arr);