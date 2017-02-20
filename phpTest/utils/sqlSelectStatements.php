<?php

include_once 'utils/db.php';

$tables = ['categories' => ['id', 'category', 'site_for'], 'products' => ['id', 'category', 'price', 'site_for', 'product_name'], 'site_name' => ['id', 'site_name'], 'admin' => ['username', 'hashed_password']];

function prepareBindExecute($query, $where) {
    
    $db = Db::getInstance();
    $statement = $db->prepare($query);
    if (!empty($where)) {
        foreach ($where as $key => $value) {
            if (!empty($value)) {
                if (is_array($value)) {
                    foreach ($value as $value2) {
                        $statement->bindValue(":$value2", $value2);
                    }
                } else {
                    $statement->bindValue(":$value", $value);
                }
            }
        }
    }
    $statement->execute();
    if (substr($query, 0, 6) === 'SELECT') {
        return $statement->fetchAll();
    }
}

function select($table, $toView, $where = []) {
    global $tables;
    if (!array_key_exists($table, $tables)) {
        $error = 'not a valid table';
        include 'views/errors.php';
        exit;
    }
    
    $query = 'SELECT ';
    
    $add = '';
    foreach ($toView as $value) {
        $add .= $value . ',';
    }
    $query .= rtrim($add, ',');
    
    $query .= " FROM $table";
    $add = '';
    
    if (!empty($where)) {
        print_r($where);
        $query .= ' where';
        foreach ($where as $key => $value) {
            if (!empty($value)) {
                if (is_array($value)) {
                    $add .= ' (';
                    foreach ($value as $value2) {
                        $add .= "$key = :$value2 or ";
                    }
                    $add = Substr($add, 0, -3);
                    $add .= ')  and';
                } else {
                    $add .= " $key = :$value and ";
                }
            }
        }
        $query .= substr($add, 0, -4);
    }
    echo $query;
    return prepareBindExecute($query, $where);
}

function delete($table, $where) {
    global $tables;
    if (!array_key_exists($table, $tables)) {
        $error = 'not a valid table';
        include 'views/errors.php';
        exit;
    }
    
    $query = "DELETE FROM $table WHERE ";
    foreach ($where as $key => $value) {
        $query .= "$key=:$value and ";
    }
    
    $query = substr($query, 0, -4);
    echo $query;
    prepareBindExecute($query, $where);
}



?>