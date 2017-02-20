<?php
$style = '
.coupon
{
    border: 3px dashed red;
}
';
require_once 'views/top.php';
require_once 'utils/function.php';
?>
  <div class="row">
    <div class="col-sm-2"></div>
    <?php foreach(getSiteNames() as $siteName): ?>
      <div class="col-sm-4 well text-center">
        <a href="index.php?action=store&siteName=<?=$siteName['site_name']?>"><h2><?= $siteName['site_name']?></h2></a>
      </div>
      <?php
endforeach;
?>
  </div>
  <?php
if(empty($_COOKIE['coupon'])):
?>
    <divclass="row">
      <div class="col-sm-4 col-sm-offset-4">
        <div class="coupon text-center">
          <h3>Enjoy 10% off your order over $75</h3> 
          Use Coupon Code: 75off
        </div>
      </div>
    </div>

      <?php
endif;
?>
        <?php
require 'views/bottom.php';
?>