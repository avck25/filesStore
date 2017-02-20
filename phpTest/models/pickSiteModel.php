<?php
unset($_COOKIE['chosenSite']);
setcookie('chosenSite','',time()-3600);

require_once 'models/homeModel.php';


?>