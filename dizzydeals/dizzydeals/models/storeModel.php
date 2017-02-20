<?php
require_once 'utils/dbo.php';
require_once 'utils/item.php';
require_once 'utils/function.php';

if(!empty($_GET['siteName']))
{
    $siteName = $_GET['siteName'];
}
function getItems($categoriesArray)
{
    global $siteName;
    $itemArray = [];
    foreach($categoriesArray as $category) :
    $query = "SELECT name, price, picture, site_name  FROM items WHERE site_name = :siteName AND categories ='$category'";
    
    try
    {
        $db = Dbo::getInstance();
        $statement = $db->prepare($query);
        $statement->bindValue(':siteName', $siteName);
        $statement->execute();
        $items = $statement->fetchAll();
        
        foreach ($items as $item)
        {
            $itemArray[$category][] = new Item($item);
        }
        $statement->closeCursor();
        
    }
    catch(DBOException $e)
    {
        $error = $e->getMessage();
        require 'views/error.php';
        exit;
    }
    endforeach;
    return $itemArray;
}
function getCategories()
{
    global $siteName;
    $query = "SELECT DISTINCT categories  FROM items WHERE site_name = :siteName";   
    try
    {
        $db = Dbo::getInstance();
        $statement = $db->prepare($query);
        $statement->bindValue(':siteName', $siteName);
        $statement->execute();
        $categories = $statement->fetchAll();
        $categoriesArray = [];
        foreach ($categories as $category)
        {
            if(isset($category['categories']))
            {
                $categoriesArray[] = $category['categories'];
            }
        }
        $statement->closeCursor();
    }
    catch(DBOException $e)
    {
        $error = $e->getMessage();
        require 'views/error.php';
        exit;
    }
    return $categoriesArray;
}

$categoriesArray = getCategories();
$itemArray = getItems($categoriesArray);
?>