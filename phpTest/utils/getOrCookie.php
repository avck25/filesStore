<?php

function getOrCookie($index) {
    if(empty($_GET[$index]) && empty($_COOKIE[$index])) {
        return null;
    }
    if (!empty($_GET[$index])){
        return $_GET[$index];
    } else {
        return $_COOKIE[$index];
    }
    
}


?>