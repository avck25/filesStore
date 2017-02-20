<?php
include_once 'views/top.php';


?>


    <form class="form-horizontal" action="index.php?action=add&add=product" method="post">

        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="product">product:</label>
            <div class="col-sm-6">
                <input class="form-control" type="text" id="nameOfSefer" name="product" >
            </div>
        </div>


        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="price">Price:</label>
            <div class="col-sm-6">
                <input class="form-control" type="number" min="0.01" step="0.01" id="price" name="price" >
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2 col-sm-offset-2" for="category">Category:</label>
            <div class="col-sm-4">
                <select class="form-control" name="category">
                <?php
                foreach ($categories as $category) {
                    echo "<option value=\"{$category['id']}\"";
                    
                    echo ">{$category['category']}</option>";
                }
                ?>
                </select>
            </div>
        </div>


        <div class="form-group">
            <div class="col-sm-2 col-sm-offset-4">
                <input name="action" type="submit" class="btn btn-default" value="add product">
            </div>
        </div>
    </form>
    




<?php
include_once 'views/bottom.php';
?>