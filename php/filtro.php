<?php 

    session_start();

    $_SESSION['categ'] = [];
    $categ = !empty($_POST['categ'])? $_POST['categ'] : array();
    $_SESSION['categ'] = $categ;

    $_SESSION['precoMin'] = !empty($_POST['precoMin'])? floatval($_POST['precoMin']) : null;
    $_SESSION['precoMax'] = !empty($_POST['precoMax'])? floatval($_POST['precoMax']) : null;

    if($_SESSION['precoMin'] != null and $_SESSION['precoMax'] != null)
        if($_SESSION['precoMin'] > $_SESSION['precoMax'])
        {
            $_SESSION['precoMin'] = 0;
            $_SESSION['precoMax'] = 9999;
        }

    $_SESSION['ordem'] = !empty($_POST['ordem'])? $_POST['ordem'] : "";

    header("Location: ../index.php");
?>
