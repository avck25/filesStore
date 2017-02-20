<?php
$url = 'http://api.walmartlabs.com/v1/items/51720851?apiKey=p2g5kwru3ty39kjkbj2d6ubk&format=json';

$context = stream_context_create(
    array(
        "http" => array(
            "header" => "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
        )
    )
);

echo file_get_contents($url);

?>