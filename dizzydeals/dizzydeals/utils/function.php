<?php
require_once 'utils/session.php';
function isLoggedIn()
{
    $session = Session::getInstance();
    return $session->getLogin();
}
function checkLogin()
{
    if(!isLoggedIn())
    {
        $error =  "Gangster! Don't try to hack in!!";
        require 'views/error.php';
        exit();
    }
}
function getSiteNames()
{
    $query = "SELECT DISTINCT site_name FROM items";
    
    try
    {
        $db = Dbo::getInstance();
        $statement = $db->prepare($query);
        $statement->execute();
        $siteNames = $statement->fetchAll();
        $statement->closeCursor();
    }
    catch(DBOException $e)
    {
        $error = $e->getMessage();
        require 'views/error.php';
        exit;
    }
    return $siteNames;
}

?>