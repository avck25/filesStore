<?php
function __distruct() {
    echo 'good bye';
}
$myArray = array(array('right'=>5,'left'=>10),array('right'=>15,'left'=>20),array('right'=>25,'left'=>30),array('right'=>35,'left'=>40),array('right'=>45,'left'=>50),array('right'=>55,'left'=>60));
echo $myArray[4]['right'];
print_r($myArray);

echo '<br>';
$myArray=[];
print_r($myArray);
echo '<br>';
echo 'hello';
?>