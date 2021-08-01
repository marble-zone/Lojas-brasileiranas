<?php

include "connection.php";

#Muda o INSERT para funcionar com seu banco
if ($value && isset($_POST['nome'])) {
        $query = "INSERT INTO pessoa (nome,funcao,salario) VALUES ('{$_POST['nome']}','{$_POST['funcao']}',{$_POST['salario']})";
        $conn->query($query);
    }


header("Location: index.php");
?>