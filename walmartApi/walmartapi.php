<?php
$data = file_get_contents('http://localhost/walmartapi/walmartapi.html');
if(!$data) {
    echo 'nothing to display';
} else {
print_r($data);
}
?>