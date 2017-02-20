<?php
include 'views/top.php';
?>
  
    <?php if (isAdmin()) : ?>
      <div class="row">
        <div class="col-sm-offset-5">
          click on an item to update or delete
          <?php
    if(!empty($_GET['msg'])) {
        echo $_GET['msg'];
    }
    ?>
            <a class="btn btn-success" href="index.php?action=add&add=product">add item</a>
        </div>
      </div>
      <?php
    endif;
    ?>
    <?php if(!empty($coupon)) {
        echo $coupon;
    }
    ?>
        <div class="row">
          <div class="col-sm-3">
            <div class="well text-center">
              <h4>Filters</h4>
            </div>
            <form class="form-horizontal well text-center">
              <div class="form-group">
                <h2>choose categories</h2>
                <?php
    if (!empty($row2)):
        foreach ($row2 as $result): ?>
                  <div class="checkbox">
                    <label class="control-label">
                      <input type="checkbox" name="category[]" value="<?= $result['id']; ?>" <?php if (!empty($_GET[ 'category']) && in_array($result[ 'id'], $_GET[ 'category'])) echo "checked"; ?> >
                      <?= $result['category']; ?>
                    </label>
                  </div>
                  <?php
    
    endforeach;
    endif; ?>
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-primary" value="filter">
                <?php if(isAdmin()) : ?>
                  <a class="btn btn-default" href="index.php?action=add&add=category2">add category</a>
                  <?php endif; ?>
              </div>
            </form>
          </div>
          


            <?php if (!empty($products)): ?>
              <div class="col-sm-9">


                <?php
    $counter = 0;
    foreach ($products as $product) :
    $counter++;
    if (!isAdmin()): ?>
                  <div class="col-sm-4 well text-center">
                    <h1><?= $product['product_name'] ?></h1>
                    <h2>$<?= $product['price'] ?> </h2>
                  </div>
   <?php endif; ?>
                  <?php if (isAdmin() && (empty($_GET['view']) || $_GET['id'] !== $product['id'])) : ?>
                    <a href="index.php?view=updateOrDelete&id=<?= $product['id'] ?>">
                      <?php endif; ?>
                        <div class="col-sm-4 well text-center">
                          <h1><?= $product['product_name'] ?></h1>
                          <h2>$<?= $product['price'] ?> </h2>
        <?php
     if (isAdmin() && !empty($_GET['view']) && $_GET['view'] === 'updateOrDelete') :
        if ($_GET['id'] === $product['id']) :
            ?>

                            <a class="btn btn-info" href="index.php?action=update&id=<?= $product['id'] ?>">update product</a>
                            <a class="btn btn-danger" href="index.php?action=delete&id=<?= $product['id'] ?>">delete product</a>

         <?php
        endif;
        ?>
            
        <?php
        endif;
        ?>
        </div>
            </a>
                             

                    <?php if ($counter % 3 === 0): ?>
                        <div class="clearfix visible-lg-block visible-md-block visible-sm-block"></div>
                        <?php
                         endif; 
                         endforeach;
                         endif;
                        ?>


                        </div>

        <?php
        include 'views/bottom.php';
        ?>