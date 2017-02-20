<?php	
require_once 'utils/function.php';
require 'utils/dbo.php';
$errors = [];
if($_SERVER['REQUEST_METHOD'] === 'POST')
{
		if(!empty($_POST['name']))
		{
			$name = $_POST['name'];
		}
		else
		{
			$errors[] = 'Item name is required';
		}
		if(isset($_POST['price']))
		{
			$price = $_POST['price'];
			if(!is_numeric($price) || $price < 0)
			{
				$errors[] = 'Price must be greater then 0';
			}
		}
		else
		{
			$errors[] = 'Price is required';
		}
		
		if(!empty($_POST['categories']))
		{
			$category = $_POST['categories'];
		}
		else
		{
			$errors[] = 'Item category is required';
		}
		
        if(!empty($_POST['picture']))
		{
			$picture = $_POST['picture'];
		}
		else
		{
			$errors[] = 'Item picture is required';
		}
		
        if(!empty($_POST['site_name']))
		{
			$site_name = $_POST['site_name'];
		}
		else
		{
			$errors[] = 'Item site is required';
		}
		
		if(empty($errors))
		{
			
			
			try
			{							
				$query = 'INSERT INTO items (name, price,categories,picture,site_name)VALUES(:name,:price,:category,:picture,:site_name)';
				$db = Dbo::getInstance();
                $preparedStatment = $db->prepare($query);
				$preparedStatment->bindValue(':name', $name);
				$preparedStatment->bindValue(':price', $price);
				$preparedStatment->bindValue(':category', $category);
                $preparedStatment->bindValue(':picture', $picture);
				$preparedStatment->bindValue(':site_name', $site_name);
				$inserted = $preparedStatment->execute();				
			}
			catch(PDOException $e)
			{
				$errors[] = $e->getMessage();			
			}	
		}
}
?>