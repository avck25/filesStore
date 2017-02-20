<?php
setcookie('time', time(),time()+(60 * 60 *24*30));

if(!empty($_COOKIE['time'])) {
    $time = $_COOKIE['time'];
    if($time +(60*60*24*7)<time()){
        $coupon = 'you have not visited in 7 days heres a coupon to take 10% of your purchase of $75';
    }
    
}


?>
  ?>