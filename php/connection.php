<?php

#Preencha todas as informações de user e senha no seu arquivo local (Obs: Não suba senha nem conexões no github)
$dbhost = '';

$dbuser = '';
$dbpass = '';

$conn = new mysqli($dbhost, $dbuser, $dbpass);

$value = mysqli_select_db($conn, '');

?>