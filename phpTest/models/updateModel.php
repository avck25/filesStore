<?php
include_once 'utils/determineAdmin.php';
include_once 'utils/sqlSelectStatements.php';
include_once 'utils/getOrCookie.php';
include_once 'utils/autoload.php';
if(!isAdmin()) {
    header("location:index.php");
}

if(!empty($_GET['id'])) {
    $id= $_GET['id'];
}
else {
    $error = 'must have a product to update';
    require 'views/errors.php';
    exit;
}

$result = select('products',['*'],['id'=>$_GET['id']]);
$categories = select('categories',['*'],['site_for'=>intval(getOrCookie('chosenSite'))]);


if($_SERVER['REQUEST_METHOD']=='POST')
{
    if(!empty($_POST['nameOfProduct'])) {
        $nameOfProduct = $_POST['nameOfProduct'];
    } else {
        $errors[] = "must have a name to update";
    }
    if(!empty($_POST['price']) && is_numeric($_POST['price'])) {
        $price = $_POST['price'];
    } else {
        $errors[] = "must have a correct price to update";
    }
    if(!empty($_POST['category'])) {
        $category = $_POST['category'];
    } else {
        $errors[] = "must have a category to update";
    }
    if(empty($errors)) {
        $query= 'UPDATE products SET product_name=:name, price=:price, category=:category  WHERE id=:id;';
        $db = Db::getInstance();
        $statement= $db->prepare($query);
        $statement->bindValue(':name',$nameOfProduct);
        $statement->bindValue(':price',$price);
        $statement->bindValue(':category',$category);
        $statement->bindValue(':id',$id);
        $statement->execute();
    }
    header("location:index.php");
}

require_once 'views/update.php';
?>