<?php
require_once 'utils/autoload.php';

function isAdmin() {
    $admin = Admin::getinstance();
    $administrator = $admin->getAdmin();
    return $administrator;
}