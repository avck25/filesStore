<?php
require 'views/top.php';
?>
  <?php
if(isset($inserted)):
?>
    <div class="alert alert-success text-center">
      <h3>You inserted <?= $inserted;?> Item</h3></div>
    <?php
endif;
?>
      <?php
if(!empty($errors)):
?>
        <div class="alert alert-warning text-center">
          <h3> <?php foreach ($errors as $error) {
echo "$error "; } ?>
</h3></div>
        <?php
endif;
?>

          <form class="form-horizontal" method="post">
            <div class="form-group">
              <label for="name" class="control-label col-sm-2 col-sm-offset-2" >Name</label>
              <div class="col-sm-6">
                <input class="form-control" type="text" id="name" name="name" required<?php if(!empty($errors) && isset($name)) echo "value=\"$name\"" ?> >
              </div>
            </div>
            <div class="form-group">
              <label for="price" class="control-label col-sm-2 col-sm-offset-2" >Price</label>
              <div class="col-sm-6">
                <input class="form-control" type="number" step=".01" id="price" name="price" required<?php if(!empty($errors) && isset($price)) echo "value=\"$price\"" ?>>
              </div>
            </div>
            <div class="form-group">
              <label for="categories" class="control-label col-sm-2 col-sm-offset-2" >Category</label>
              <div class="col-sm-6">
                <input class="form-control" type="text" id="categories" name="categories"required <?php if(!empty($errors) && isset($category)) echo "value=\"$category\"" ?>>
              </div>
            </div>
             <div class="form-group">
              <label for="picture" class="control-label col-sm-2 col-sm-offset-2" >Picture</label>
              <div class="col-sm-6">
                <input class="form-control" type="text" id="picture" name="picture" required<?php if(!empty($errors) && isset($picture)) echo "value=\"$picture\"" ?>>
              </div>
            </div>
             <div class="form-group">
              <label for="site_name" class="control-label col-sm-2 col-sm-offset-2" >Site Name</label>
              <div class="col-sm-6">
                <input class="form-control" type="text" id="site_name" name="site_name" required<?php if(!empty($errors) && isset($site_name)) echo "value=\"$site_name\"" ?>>
              </div>
            </div>
            <div class="col-sm-2 col-sm-offset-5">
              <div class="form-group">
                <input class="btn btn-primary form-control" type="submit" value="Add Item">
              </div>
            </div>
          </form>
          <?php
require 'views/bottom.php';
?>