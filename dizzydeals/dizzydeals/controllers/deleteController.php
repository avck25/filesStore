<?php
require 'utils/dbo.php';
require_once 'utils/function.php';
if(!empty($_GET['item']))
{
    $item = $_GET['item'];
}
else
{
    $error = 'Please select a item to delete';
    require 'views/error.php';
    exit;
}
if(!empty($_GET['siteName']))
{
    $siteName = $_GET['siteName'];
}
else
{
    $error = 'Please select a site name';
    require 'views/error.php';
    exit;
}
$query = 'DELETE FROM items WHERE name = :item';
$db = Dbo::getInstance();
$statement = $db->prepare($query);
$statement->bindValue(':item', $item);
$statement->execute();
echo $siteName;
header("Location:index.php?action=store&siteName=$siteName");
?>