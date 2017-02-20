<?php 

require 'views/top.php';

?>
    <div class="alert alert-danger text-center">
        <?php if(!empty($error)) : ?>
            <h3><?= $error ?></h3>
            <?php endif; ?>
    </div>
    <a class="btn btn-primary " href="index.php">Home</a>



    <?php 
    require 'bottom.php';
?>