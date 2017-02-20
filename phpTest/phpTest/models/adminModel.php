<?php

require_once 'utils/sqlSelectStatements.php';
require_once 'utils/autoload.php';

if ($_POST['admin'] === 'sign out') {
    $admin = Admin::getInstance();
    $admin->clear();
    header('location:index.php');
    exit;
}
if (!empty($_POST['user'])) {
    $user = $_POST['user'];
} else {
    $error = 'you must put in a username';
    require 'views/errors.php';
    exit;
}

if (!empty($_POST['password'])) {
    $password = $_POST['password'];
} else {
    $error = 'you must put in a password';
    require 'views/errors.php';
    exit;
}

$row = select('admin', ['hashed_password'], ['username' => $user]);
print_r($row);
if (!password_verify($password, $row[0]['hashed_password'])) {
    $error = "that is not the right user name or password";
    require 'views/errors.php';
    die;
}


$admin = Admin::getInstance();
$admin->createAdmin();
$_SESSION['user'] = $user;
$_SESSION['password'] = $password;
require 'models/homeModel.php';
?>