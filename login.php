<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/login.css" type="text/css" rel="stylesheet">
    <link rel="icon" type="image/png" href="images/login-images/icon-login.png" />
    <title> Login - Lojas Brasileiranas </title>
</head>

<body>
    <main>
        <form action="php/autenticacao.php" method="POST"></form>
        <h1 id="login-text"> Login </h1>
        <h1 id="title"> Lojas Brasileiranas </h1>
        <div id="divinputs">
            <p class="label"> USUÁRIO </p>
            <input name="email" type="email" placeholder="Digite seu email..." required>
            <p class="label"> SENHA </p>
            <input name="password" type="password" placeholder="Digite sua senha..." required>
            <a href="index.html" target="_blank">
                <p class="links"> Esqueceu a Senha? </p>
            </a>
            <?php if (isset($_SESSION["erro"])): ?>
                   <h3 style="margin: 30px 0 20px 0;padding-left: 20px;color: rgb(116, 66, 255);" >Erro! Login ou Senha fornecidos estão incorretos!!!</h3>
            <?php unset($_SESSION["erro"]); endif; ?>
            <button id="subbtt" type="submit"> ENTRAR </button>
        </div>
        <a href="cadastro.php">
            <p id="linkcad" class="links"> Clique aqui para se cadastrar</p>
        </a>
    </main>
</body>

</html>