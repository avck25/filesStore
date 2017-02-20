<?php
require_once 'utils/function.php';
class Dbo
{ 
	private $dbo;
	private static $instance;

	private function __construct()
	{
		$user='phpuser';
		$password='p@$$ward';
		$cs='mysql:host=localhost;dbname=phptestdb';
		$options = [PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION];
		try
		{
			$this->dbo = new PDO($cs, $user, $password,$options);
		}
			catch(PDOException $e)
		{
			$error = $e->getMessage();
			require 'views/error.php';
			exit;
		}
	}
	public static function getInstance()
	{
		if(!self::$instance)
		{
			self::$instance = new Dbo();
		}
		return self::$instance;
	}
	public function prepare($query)
	{
		return $this->dbo->prepare($query);
	}
}
?>