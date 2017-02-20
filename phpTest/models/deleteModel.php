<?php
include_once 'utils/sqlSelectStatements.php';
include_once 'utils/determineAdmin.php';
if(!isAdmin()) {
    header("location:index.php");
}
if(!empty($_GET['id'])) {
    $id= $_GET['id'];
}
else {
    $error = 'must have a product to delete';
    require 'views/errors.php';
    exit;
}

$product = select('products',['product_name'],['id'=>$id]);

delete('products',['id'=>$_GET['id']]);

$msg = "you have successfuly deleted {$product['product_name']}";
header("location:index.php?msg=$msg")
?>