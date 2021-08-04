<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/cadastro.css" type="text/css" rel="stylesheet">
    <link rel="icon" type="image/png" href="images/login-images/icon-login.png" />
    <title> Cadastro </title>
</head>
<body>
    <main>
        <form action="php/insertUser.php" method="POST">
            <?php if (isset($_SESSION["erro1"])): ?>
            <h3 style="margin: 30px 0 20px 0;padding-left: 25%;color: rgb(116, 66, 255);" >Erro! Já existe um cliente cadastrado com este CPF!!!</h3>
            <?php unset($_SESSION["erro"]); endif; ?>
            <?php if (isset($_SESSION["erro2"])): ?>
            <h3 style="margin: 30px 0 20px 0;padding-left: 30%;color: rgb(116, 66, 255);" >Erro! Selecione um Estado válido!!!</h3>
            <?php unset($_SESSION["erro"]); endif; ?>
            <h1> Cadastro </h1>
            <div id="divinputs">
                <p class="label"> Nome completo </p>
                <input name="name" type="text" placeholder="Nome completo" required>
                <p class="label"> Senha </p>
                <input name="password" type="password" placeholder="Senha" required>
                <p class="label"> Email </p>
                <input name="email" type="email" placeholder="Email" required>
                <p class="label"> CPF </p>
                <input name="cpf" id="cpf" type="text" placeholder="CPF" required>

                <div>
                    <p class="label"> Logradouro </p>
                    <input name="logradouro" type="text" placeholder="Rua" required>
                    <p class="label"> Número </p>
                    <input name="numero" type="number" placeholder="Número do endereço" required>
                </div>
                <div>
                    <p class="label"> Bairro </p>
                    <input name="bairro" type="text" placeholder="Bairro" required>
                    <p class="label"> Cidade </p>
                    <input name="city" type="text" placeholder="Cidade" required>
                    <p class="label"> Estado </p>
                    <select class="address" name="uf" id="uf">
                        <option value="">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AM">AM</option>
                        <option value="AP">AP</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MG">MG</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="PR">PR</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="TO">TO</option>
                     </select>
                    <p class="label"> CEP </p>
                    <input name="cep" id="cep" type="text" placeholder="CEP" required>
                </div>
                   <button id="subbtt" type="submit"> ENTRAR </button>
            </div>
        </form>
    </main>
</body>
</html>

<script type="text/javascript" src="js/CEPMask.js"></script>
<script type="text/javascript" src="js/CPFMask.js"></script>