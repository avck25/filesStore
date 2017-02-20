<?php
require_once 'utils/item.php';
$style = '.item figure img
{
    margin: 0 auto;
    max-width: 100%;
    height: 120px;
}
.item .name
{
    height: 50px;
}
.category
{
    padding-top: 50px;
    margin-top: -50px;
}

';
?>

  <?php
require 'views/top.php';
?>
    <?php if(isLoggedIn()) : ?>
      <div class="col-sm-2">
        <div class="form-group">
          <a class="btn btn-primary form-control" href="index.php?action=add">Add Item</a>
        </div>
      </div>
      <?php
endif;
?>
        <?php
foreach($categoriesArray as $category):
?>
          <div class="row">
            <div class="well col-sm-8 col-sm-offset-2 ">
              <h4 class="category" id="<?=$category?>"><?= $category ?></h4>
            </div>
          </div>
          <form class="form">
            <div class="col-sm-8 col-sm-offset-2">
              <?php
foreach($itemArray[$category] as $item) :
?>
                <div class="col-sm-3 item">
                  <div class="form-group item">
                    <figure>
                      <img class="img-responsive" src="<?=$item->getPicture()?>" alt="<?=$item->getName()?>">
                      <figcaption>
                        <label for="<?=$item->getName()?>" class="control-label name">
                          <h4 class="text-center"><?=$item->getName()?></h4>
                        </label>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="form-group">
                    <label for="<?=$item->getPrice()?>" class="control-label pull-right">$
                      <?=$item->getPrice()?>
                    </label>
                  </div>
                  <div class="form-group">
                    <input type="number" class="form-control" name="<?=$item->getName()?>" min="0" id="<?=$item->getName()?>">
                  </div>

                  <?php if(isLoggedIn()) : ?>
                    <div class="form-group">
                      <a class="btn btn-danger form-control" href="index.php?action=Delete&item=<?=$item->getName()?>&siteName=<?=$item->getSite_name()?>">Delete Item</a>
                    </div>
                    <div class="form-group">
                      <a class="btn btn-info form-control" href="index.php?action=edit&item=<?=$item->getName()?>&siteName=<?=$item->getSite_name()?>">Edit</a>
                    </div>

                    <?php
endif;
?>
                </div>
                <?php
endforeach;
?>
            </div>
          </form>
          <?php
endforeach;
?>

            <?php
require 'views/bottom.php';
?>