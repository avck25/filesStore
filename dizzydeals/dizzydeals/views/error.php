<?php	
	include 'views/top.php';
?>
<div class="alert alert-danger text-center">
	<h2>Something went wrong</h2>  
	<?php if(!empty($error)) : ?>
	<h3><?=$error?></h3>
	<?php endif; ?>
</div>
	<a href="index.php" class="btn btn-primary">Home</a>
<?php
	include 'views/bottom.php';
?>