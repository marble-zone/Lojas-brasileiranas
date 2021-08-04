<?php

require_once "connection.php";

//Autenticação
if (isset($_POST['email']) && isset($_POST['password'])){
    session_start();

    $email = $_POST['email'];
    $cripto = md5($_POST['password']);
    $query = "SELECT id_cliente FROM cliente WHERE email = '{$email}' and senha = '{$cripto}'";
    $result = $conn->query($query);
    $cond = 0;
    if($result)
            while($row = $result->fetch_assoc())
                $cond = $row['id_cliente'];

    if($cond){
        $row = $result->fetch_assoc();
        $_SESSION["logado"] = $cond;
        header("Location: ../index.php");
    }
    else{
        $_SESSION["erro"] = true;
        header("Location: ../login.php");
    }
    
}
