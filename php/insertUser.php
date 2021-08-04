<?php

require_once "connection.php";

//Cadastrar novo usuário
if (isset($_POST['name'])) {
        $cpf = str_replace('.','',$_POST['cpf']);
        $cpf = str_replace('-','',$cpf);
        $query = "SELECT id_cliente FROM cliente WHERE cpf = '{$cpf}'";
        $result = $conn->query($query);
        $cond = 0;
        if($result)
            while($row = $result->fetch_assoc())
                $cond = $row['id_cliente'];
        if($cond){
            session_start();
            $_SESSION["erro1"] = true;
            header("Location: ../cadastro.php");
        }
        else{
            if($_POST['uf'] == ''){
                session_start();
                
                $_SESSION["erro2"] = true;
                header("Location: ../cadastro.php");
            }
            else{
                $row = $result->fetch_assoc();
                $cripto = md5($_POST['password']);
                $cep = str_replace('-','',$_POST['cep']);
                $query = "INSERT INTO cliente (nome,senha,cpf,email,logradouro,numero,bairro,cidade,estado,cep) 
                      VALUES ('{$_POST['name']}','{$cripto}','{$cpf}','{$_POST['email']}','{$_POST['logradouro']}',{$_POST['numero']},'{$_POST['bairro']}','{$_POST['city']}','{$_POST['uf']}','{$cep}')";
                $conn->query($query);
                $query = "SELECT id_cliente from cliente WHERE cpf = '{$cpf}'";
                $result = $conn->query($query);
                $cond = 0;
                if($result){
                    session_start();
                    while($row = $result->fetch_assoc()){
                        $cond = $row['id_cliente'];
                        break;
                    }
                    $_SESSION["logado"] = $cond;
                }
                header("Location: ../index.php");
            }
        }
    }
