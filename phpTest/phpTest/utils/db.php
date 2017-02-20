<?php
class Db {
    private static $instance;
    private $dbo;
    
    private function __construct() {
        $cs = 'mysql:host=localhost;dbname=phptestdb';
        $user = 'phpuser';
        $password = 'p@$$ward';
        $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        
        try {
            $this->dbo = new PDO($cs, $user, $password, $options);
        } catch(PDOException $e) {
            //$error = $e->getMessage();
            
        }
    }
    
    
    public function query($query)
    {
        return $this->dbo->query($query);
    }
    
    public function prepare($query) {
        return $this->dbo->prepare($query);
    }
    
    public static function getInstance() {
        if(empty(self::$instance)) {
            self::$instance = new Db();
        }
        return self::$instance;
    }
}
?>