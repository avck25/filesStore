<?php
require_once 'utils/sqlSelectStatements.php';

function handleTop() {
    if (empty(getOrCookie('chosenSite'))) {
        $row = select('site_name', ['*']);
        
    } else {
        echo 'hello';
        $row = select('site_name', ['*'], ['id' => intVal(getOrCookie('chosenSite'))]);
    }
    return $row;
}
?>