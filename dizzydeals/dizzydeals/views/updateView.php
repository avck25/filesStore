<?php
require 'views/top.php';

?>
  <form class="form-horizontal" method="post" action="index.php?action=edit&item=<?=$item?>">
<?php
if(!isset($updated)):
?>
      <div class="alert alert-info text-center">
        <h3>Please enter updated information for <?=$item?></h3>
      </div>
      <div class="form-group">
        <label for="name" class="control-label col-sm-2 col-sm-offset-2" required>Name</label>
        <div class="col-sm-6">
          <input class="form-control" type="text" id="name" name="name" value="<?=$result['name']?>">
        </div>
      </div>

      <div class="form-group">
        <label for="price" class="control-label col-sm-2 col-sm-offset-2" required>Price</label>
        <div class="col-sm-6">
          <input class="form-control" type="number" step=".01" id="price" name="price" value="<?=$result['price']?>">
        </div>
      </div>
      <div class="form-group">
        <label for="categories" class="control-label col-sm-2 col-sm-offset-2" required>Category</label>
        <div class="col-sm-6">
          <input class="form-control" type="text" id="categories" name="categories" value="<?=$result['categories']?>">
        </div>
      </div>
      <div class="form-group">
        <label for="picture" class="control-label col-sm-2 col-sm-offset-2" required>Picture</label>
        <div class="col-sm-6">
          <input class="form-control" type="text" id="picture" name="picture" value="<?=$result['picture']?>">
        </div>
      </div>
      <div class="form-group">
        <label for="site_name" class="control-label col-sm-2 col-sm-offset-2" required>Site Nmae</label>
        <div class="col-sm-6">
          <input class="form-control" type="text" id="site_name" name="site_name" value="<?=$result['site_name']?>">
        </div>
      </div>
      <div class="col-sm-2 col-sm-offset-5">
        <div class="form-group">
          <input class="btn btn-primary form-control" type="submit" value="Update Item">
        </div>
      </div>
  </form>
  <?php
elseif($updated):
    ?>
    <div class="alert alert-success text-center">
      <h3><?=$item?> was updated</h3>
    </div>
    <?php
endif;
?>
      <?php
require 'views/bottom.php';
?>