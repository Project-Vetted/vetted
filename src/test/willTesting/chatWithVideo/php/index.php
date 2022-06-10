<?php

    // connect to database
    $conn = mysqli_connect('localhost', 'root', codeup);

    // check connection
    if(!$conn){
        echo 'Connection error: ' . mysqli_connect_error();
    }

    // query for user data
    $sql = 'SELECT username, email, id FROM users';

    // make query and get result
    $result = mysqli_query($conn, $sql);

    // fetch the resulting rows as an array
    $users = mysqli_fetch_all($result, MYSQLI_ASSOC);

    print_r($users);




