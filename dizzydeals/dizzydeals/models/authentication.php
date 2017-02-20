<?php
require 'utils/dbo.php';
require_once 'utils/session.php';
if(!empty($_GET['siteName']))
{
    $siteName = $_GET['siteName'];
}
if(!empty($_POST['logout']))
{
    $session = Session::getInstance();
    $session->logout();
     header("Location:index.php");
     exit;
}
if(!empty($_POST['user']))
{
    $username = $_POST['user'];
}
else{
    header("Location:index.php");
}
if(!empty($_POST['password']))
{
    $password = $_POST['password'];
}
else{
    header("Location:index.php");
}
$query = 'SELECT password FROM users WHERE username = :user';
$db = Dbo::getInstance();
$statement = $db->prepare($query);
$statement->bindValue(':user', $username);
$statement->execute();
$row = $statement->fetch();
if(password_verify($password, $row['password'])){
    $session = Session::getInstance();
    $session->createLogin();
    header("Location:index.php");
    exit;
}
else{
    die('Password Failed KEEP OUT');
}
?>