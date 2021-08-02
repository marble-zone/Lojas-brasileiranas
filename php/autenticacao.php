<?php

require_once "connection.php";


//Autenticação
if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['cpf'])){


    $email = $_POST['email'];
    $cripto = md5($_POST['password']);
    $query = "SELECT id_cliente FROM cliente WHERE email = '{$email}', senha = '{$cripto}'";
    $result = $mysqli->query($query);
    
    if($result){
        $_SESSION["logado"] = true;
        header("Location: index.php");
    }
    else{
        $_SESSION["erro"] = true;
        header("Location: login.php");
    }


}


?>