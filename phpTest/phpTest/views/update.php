<?php
include_once 'views/top.php';
?>


    <form class="form-horizontal" method="post" action="index.php?action=update&id=<?= $_GET['id'] ?>">

        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="nameOfProduct">Name:</label>
            <div class="col-sm-6">
                <input class="form-control" type="text" id="nameOfProduct" name="nameOfProduct" value="<?= $result[0]['product_name'] ?>">
            </div>
        </div>


        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="price">Price:</label>
            <div class="col-sm-6">
                <input class="form-control" type="number" min="0.01" step="0.01" id="price" name="price" value="<?= $result[0]['price'] ?>">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="category">Category:</label>
            <div class="col-sm-6">
                <select class="form-control" name="category">
                <?php
                foreach ($categories as $category) {
                    echo "<option value=\"{$category['id']}\"";
                    if($result[0]['id'] === $category['id']) {
                        echo 'selected';
                    }
                    echo ">{$category['category']}</option>";
                }
                ?>
                </select>
            </div>
        </div>


        <div class="form-group">
            <div class="col-sm-2 col-sm-offset-4">
                <input name="action" type="submit" class="btn btn-default" value="update product">
            </div>
        </div>
    </form>

    <?php 
    include_once 'views/bottom.php';
    ?>