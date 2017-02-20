<?php

class Admin {
    private static $instance;
    
    private function __construct() {
        session_start();
    }
    
    public function createAdmin() {
        if(empty($_SESSION['admin'])) {
            $_SESSION['admin'] = true;
        }
    }
    
    public function getAdmin() {
        if(isset($_SESSION['admin'])) {
            return true;
        } else {
            return false;
        }
        
    }
    
    public function clear() {
        $_SESSION = [];
    }
    
    public static function getInstance() {
        if (empty(self::$instance)) {
            self::$instance = new Admin();
        }
        return self::$instance;
    }
}

?>