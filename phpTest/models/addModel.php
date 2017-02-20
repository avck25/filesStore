<?php
require_once 'utils/sqlSelectStatements.php';
require_once 'utils/getOrCookie.php';
require_once 'utils/autoload.php';
if($_GET['add']==='Category') {
    require 'views/addCategory.php';
    if($_SERVER['REQUEST_METHOD']==='POST') {
        if(!empty($_POST['category'])) {
            $category = $_POST['category'];
        }
        else {
            $error = 'must have a category';
            require 'views/errors.php';
            exit;
        }
        
        $query = 'INSERT INTO categories( category,site_for) VALUES(?,?)';
        $db = Db::getInstance();
        $statement = $db ->prepare($query);
        $numInserted = $statement->execute([ $category,intval(getOrCookie('chosenSite'))]);
    }
    require 'views/addCategory.php';
    exit;
}

if($_GET['add']==='product'){
    $categories = select('categories',['*'],['site_for'=>intval(getOrCookie('chosenSite'))]);
    if($_SERVER['REQUEST_METHOD']==='POST') {
        if(!empty($_POST['product'])){
            $name = $_POST['product'];
        }
        else {
            $error = 'must have a product';
            require 'views/errors.php';
            exit;
        }
        if(!empty($_POST['price'])&&is_numeric($_POST['price'])){
            $price = $_POST['price'];
        }
        else {
            $error = 'must have a price';
            require 'views/errors.php';
            exit;
        }
        if(!empty($_POST['category'])){
            $category = $_POST['category'];
        }
        else {
            $error = 'must have a product';
            require 'views/errors.php';
            exit;
        }
        $query = 'INSERT INTO products( product_name,price,category,site_for) VALUES(?,?,?,?)';
        $db = Db::getInstance();
        $statement = $db ->prepare($query);
        $numInserted = $statement->execute([$name,$price,$category,intval(getOrCookie('chosenSite'))]);
    }
    
    require 'views/add.php';
}
?>