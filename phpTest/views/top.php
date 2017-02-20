<?php
include_once 'utils/getOrCookie.php';
require_once 'utils/determineAdmin.php';
require_once 'utils/handleTop.php';

$row = handleTop();
print_r($row);
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>

    <head>
        <meta charset="UTF-8">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>my Sites</title>
        <link href="myBootstrap/css/bootstrap.min.css" rel="stylesheet">


        <style>
<?php
if (!empty($style))
    echo $style;
?>
        </style>

    </head>

    <body>


        <div class="container-fluid">
            <div class="jumbotron">
                <div class="col-sm-3">
                    <form class="form form-inline" action="index.php?action=admin" method="post">

                        <?php if (isAdmin()) : ?>
                            <p>welcome <?= $_SESSION['user'] ?>
                            <?php else: ?>
                                <input class="form-control" type="text" placeholder="admin username" name="user" required>
                                <input class="form-control" type="password" placeholder="admin password" name="password" required>

                            <?php endif; ?>
                            <input type="submit" class="btn btn-primary" name="admin" value="<?= isAdmin() ? 'sign out' : 'sign in' ?>">
                    </form>
                </div>
                <?php
                foreach ($row as $site):
                    if (empty(getOrCookie('chosenSite'))) :
                        ?>
                        <a class="btn btn-primary" href="index.php?action=home&chosenSite=<?= $site['id'] ?>">
                            <?= $site['name_of_site'] ?>
                        </a>
                        <?php
                    else/*if (!empty(getOrCookie('chosenSite'))) */:
                        ?>      
                        <div class="col-sm-2">
                            <a class="btn btn-default" href="index.php?action=pickSite">pick site</a>
                        </div>

                        <h1 class="text-underline"><?= $site['name_of_site'] ?></h1>
                        <?php
                    endif;
                endforeach;
                ?>
                <h2 class="control"></h2>
                <h2></h2>
            </div>
        </div>
        <div class="container">