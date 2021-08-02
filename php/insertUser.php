<?php

require_once "connection.php";

//Cadastrar novo usuário
if (isset($_POST['name'])) {
        $cpf = $_POST['cpf'];
        $query = "SELECT id_cliente FROM cliente WHERE cpf = '{$cpf}'";
        $result = $conn->query($query);

        if(!$result){
            $_SESSION["erro"] = true;
            header("Location: cadastro.php");
        }
        else{
            $row = $result->fetch_assoc();
            $cripto = md5($_POST['password']);
            $query = "INSERT INTO cliente (nome,senha,cpf,email,logradouro,numero,bairro,cidade,estado,cep) 
                      VALUES ('{$_POST['name']}','{$cripto}','{$cpf}','{$_POST['email']}','{$_POST['logradouro']}',{$_POST['numero']},'{$_POST['bairro']}','{$_POST['city']}','{$_POST['uf']}','{$_POST['cep']}')";
            $conn->query($query);
            $_SESSION["logado"] = $row["id_cliente"];
            header("Location: ../index.php");
        }
    }


?>