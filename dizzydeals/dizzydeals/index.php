<?php
require_once 'utils/function.php';
if(!empty($_GET['action']))
{
    $action = $_GET['action'];
}
else
{
    $action = 'main';
}

if(!empty($_GET['siteName']))
{
    $siteName = $_GET['siteName'];
}


switch($action)
{
    case 'main':
        require 'controllers/maincontroller.php';
        exit();
    case 'store':
        require 'controllers/storeController.php';
        exit;
    case 'admin':
        require 'controllers/admin.php';
        exit;
    case 'Delete':
        checkLogin();
        require 'controllers/deleteController.php';
        exit;
    case 'edit':
        checkLogin();
        require 'controllers/editController.php';
        exit;
    case 'add':
        checkLogin();
        require 'controllers/addController.php';
        exit;
    default:
        $error =  "Don't know how to $action";
        require 'views/error.php';
        exit();
}
            ?>