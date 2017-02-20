<?php

require_once 'utils/sqlSelectStatements.php';
require_once 'utils/getOrCookie.php';
require_once 'utils/autoload.php';
require_once 'utils/determineAdmin.php';

if (!empty($_GET['category'])) {
    $category = $_GET['category'];
} else {
    $category = null;
}

if(!empty(getOrCookie('chosenSite'))) {
    $row2 = select('categories', ['*'], ['site_for' => intVal(getOrCookie('chosenSite'))]);
    $products = select('products', ['product_name', 'price', 'id'], ['site_for' => intVal(getOrCookie('chosenSite')), 'category' => $category]);
}

require 'views/home.php';
?>