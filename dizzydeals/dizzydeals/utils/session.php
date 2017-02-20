<?php
class Session{

    private static $instance;

    private function __construct()
    {
        session_start();
    }

    public function createLogin()
    {
         if(!isset($_SESSION['login']))
        {
            $_SESSION['login'] = true;
        }
    }
    public function logout()
    {
        $_SESSION = [];
    }

    public function getLogin()
    {
        if(isset($_SESSION['login']))
        {
        return $_SESSION['login'];
        }
        else{
            return false;
        }
    }

    public static function getInstance(){
        if(empty(self::$instance)){
            self::$instance = new Session();
        }
        return self::$instance;
    }
}
?>