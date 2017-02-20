<?php
require 'utils/dbo.php';
require_once 'utils/function.php';

if(!empty($_GET['item']))
{
    $item = $_GET['item'];
}
else {
    $error = 'Please select a item to update';
    require 'views/error.php';
    exit;
}


$query = 'SELECT * FROM items WHERE name = :item';
$db = Dbo::getInstance();
$statement = $db->prepare($query);
$statement->bindValue(':item', $item);
$success=$statement->execute();
$result = $statement->fetch();
$item = $result['name'];

if($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($error))
{
    if(!empty($_POST['name']))
    {
        $name = $_POST['name'];
    }
    else
    {
        $error = 'Item name is required';
        require 'views/error.php';
        exit;
    }
    if(isset($_POST['price']))
    {
        $price = $_POST['price'];
        if(!is_numeric($price) || $price < 0)
        {
            $error = 'Price must be greater then 0';
            require 'views/error.php';
            exit;
        }
    }
    else
    {
        $error = 'Item price is required';
        require 'views/error.php';
        exit;
    }
    if(!empty($_POST['categories']))
    {
        $categories = $_POST['categories'];
    }
    else
    {
        $error = 'Item category is required';
        require 'views/error.php';
        exit;
    }
    if(!empty($_POST['picture']))
    {
        $picture = $_POST['picture'];
    }
    else
    {
        $error = 'Item Picture is required';
        require 'views/error.php';
        exit;
    }
    if(!empty($_POST['site_name']))
    {
        $siteName = $_POST['site_name'];
    }
    else
    {
        $error = 'Item Site Name is required';
        require 'views/error.php';
        exit;
    }
    $query2 = 'UPDATE items SET name = ?, price= ?, categories= ?, picture= ?, site_name= ? WHERE name = ?';
    $db = Dbo::getInstance();
    $statement = $db->prepare($query2);
    $statement->bindValue(1, $name);
    $statement->bindValue(2, $price);
    $statement->bindValue(3, $categories);
    $statement->bindValue(4, $picture);
    $statement->bindValue(5, $siteName);
    $statement->bindValue(6, $item);
    $updated=$statement->execute();
}
?>