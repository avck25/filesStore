<?php
require 'utils/httpsOnly.php';
require 'utils/time.php';
    if(!empty($_GET['chosenSite'])) {
        setcookie ('chosenSite',$_GET['chosenSite'],0);
    }
    
    $action = 'home';
    if(!empty($_GET['action'])) {
        $action = $_GET['action'];
    }

    if(is_file('controllers/'.$action.'controller.php')) {
        require 'controllers/'.$action.'controller.php';
    }
?>