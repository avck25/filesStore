<?php
if(!isset($siteName))
{
    $siteName = 'Dizzy Deals';
}
require_once 'utils/function.php';
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style>
      <?php if(!empty($style)) echo $style;
      ?> body {
        margin-top: 50px;
      }
    </style>
    <title>Dizzy Deals</title>
  </head>

  <body>
    <div class="container-fluid">
      <div class="jumbotron">
        <?php if(!isLoggedIn()) : ?>
          <div class="row">
            <div class="pull-left">
              <form class="form form-inline" action="index.php?action=admin" method="post">
                <div class="form-group">
                  <input type="text" class="form-control" name="user" placeholder="Admin username">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="password" placeholder="Admin password">
                </div>
                <div class="form-group">
                  <input type="submit" class="form-control btn btn-primary" value="Login">
                </div>
              </form>
            </div>
          </div>
          <?php
else :
    ?>
            <div class="row">
              <div class="pull-left">
                <form class="form form-inline" action="index.php?action=admin" method="post">
                  <div class="form-group">
                    <input type="hidden" name="logout" value="logout">
                    <input type="submit" class="form-control btn btn-primary" value="Log Out">
                  </div>
                </form>
              </div>
            </div>
            <?php
endif;
?>
              <div class="row ">
                <div class="row text-center">
                  <h1>Welcome to <?=$siteName?></h1>
                  <a href="https://www.amazon.com/s?marketplaceID=ATVPDKIKX0DER&me=A395YZAW6TUE35&merchant=A395YZAW6TUE35&redirect=true">Visit us on amazon</a>
                </div>
              </div>
      </div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="index.php">Home</a>
        </div>
        <?php
         foreach(getSiteNames() as $siteName): ?>
        <div class="navbar-header">
          <a class="navbar-brand" href="index.php?action=store&siteName=<?=$siteName['site_name']?>"><?=$siteName['site_name']?></a>
        </div>
        <?php
        endforeach; 
        ?>
        <?php if(isset($categoriesArray)): ?>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">

              <?php
foreach($categoriesArray as $category):
?>
                <li>
                  <a href="#<?=$category?>">
                    <?=$category?>
                  </a>
                </li>
                <?php
endforeach;
?>
            </ul>
          </div>
        <?php
endif;
?>
    </nav>
