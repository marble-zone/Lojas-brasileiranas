<?php

#Preencha todas as informações de user e senha no seu arquivo local (Obs: Não suba senha nem conexões no github)
$dbhost = '';

$dbuser = '';
$dbpass = '';

$conn = new mysqli($dbhost, $dbuser, $dbpass);

$value = mysqli_select_db($conn, '');

#Muda o INSERT para funcionar com seu banco
if ($value && isset($_POST['nome'])) {
        $query = "INSERT INTO pessoa (nome,funcao,salario) VALUES ('{$_POST['nome']}','{$_POST['funcao']}',{$_POST['salario']})";
        $conn->query($query);
    }


header("Location: index.php");
?>