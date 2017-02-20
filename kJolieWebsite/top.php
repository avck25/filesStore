<?php 
try {
   $cs= "mysql:host=localhost;dbname=k_jolie" ;
   $username= "kjolie10";
   $password = "jewish613";

   $pdo = new PDO($cs,$username,$password);
   $query = "SELECT * from products";
   $results = $pdo->query($query);
}
catch (DBOexception $e) {
  $e->getMessage();
}
   ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   
    <title>K. Jolie</title>

    <!-- Bootstrap -->
    <link href="/myBootstrap/css/bootstrap.min.css" rel="stylesheet">

    <style>
    /*.product-image {
       margin:0 auto;
        width: 50%;
        height: 254px;*/
    }
    
    </style>
  
  </head>
  <body>
  <div class = "jumbotron text-center">
    <h1>K.Jolie</h1>
    <h2>The Best deals</h2>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">K. Jolie</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">products <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Catgories <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Toys & Games</a></li>
            <li><a href="#">Kitchen & Dining</a></li>
            <li><a href="#">Baby Center</a></li>
            <!--li role="separator" class="divider"></li-->
            <li><a href="#">Electronics</a></li>
            <!--li role="separator" class="divider"></li-->
            <li><a href="#">Pet Center</a></li>
            <li><a href="#">Health & beauty</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">all categories <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">health and beauty</a></li>
            <li><a href="#">toys</a></li>
            <li><a href="#">feet</a></li>
             <li><a href="#">kitchen</a></li>
              <li><a href="#">home</a></li>
               <li><a href="#">baby</a></li>
                <li><a href="#">jewelery</a></li>
                 <li><a href="#">tools</a></li>
                  <li><a href="#">pet supplies</a></li>
                   <li><a href="#">office products</a></li>
                    <li><a href="#">electronics</a></li>
                     <li><a href="#">everything else</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
  <div class ="container">
    <div class = "row">
    <?php $counter =0; foreach ($results as $result) : ?>


        <div class= "col-sm-3">
           <figure>
           <a href = "productDetails.php"> <img class = "product-image img-responsive"  src="<?= $result['images'] ?>" alt="<?= $result['title'] ?>"></a>
            <figcaption>
                <p><?= $result['title'] ?> </p>
                <p><?= $result['price'] ?></p>
            </figcaption>
           </figure>
        </div> 
        <?php endforeach ?>
         
    
    
    </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/myBootstrap/js/bootstrap.min.js"></script>
  </body>
</html>