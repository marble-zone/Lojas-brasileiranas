<?php
    session_start();
    
    if(isset($_SESSION['erro'])){
        unset($_SESSION['erro']);
    }
    if(isset($_SESSION['erro1'])){
        unset($_SESSION['erro1']);
    }
    if(isset($_SESSION['erro2'])){
        unset($_SESSION['erro2']);
    }

    if(isset($_SESSION['logado'])){
        require_once "php/connection.php";
        $cliente = $_SESSION['logado'];
        $query = "SELECT nome FROM cliente WHERE id_cliente = '{$cliente}'";
        $result = $conn->query($query);
        while($row = $result->fetch_assoc()) $nome = $row['nome'];
        $nome = explode(' ',$nome,15);
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Um site de vendas onde você encontra tudo o que existe e o que não existe(???)" />
    <meta name="keywords" content="Lojas Brasileiranas, Lojas, Brasileiranas, e-commerce, Vendas" />
    <meta name="autor" content="Gabriel Prado Branco Araujo,Lucas Gonçalves Ferreira,Vinícius Pelegrineli Bombarda" />
    <!-- <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /> !-->
    <title>Lojas Brasileiranas</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" href="images/icons/favicon.ico" />
</head>
<body>
    <div id="fixed">
        <header>
            <div id="divheader">
                <h1 id="title"> Lojas Brasileiranas </h1>
                <nav>
                    <a href="login.php">
                        <img src="images/icons/user.png" class="iconheader">
                    </a>
                    <?php
                        if(isset($_SESSION['logado'])) 
                            echo "<p id='bemvindo'> Bem vindo,<br>{$nome[0]} !</p>"; 
                    ?>
                    <a href="#home">
                        <option class="iconheader" value="home" onclick="changeContent(this.value)">
                            <!--<img src="images/icon-shop.png">-->
                        </option>
                    </a>
                    <!--<a href="#pedidos">
                        <option class="iconheader" style="background-image:url(images/icon-user.png);" value="user" onclick="changeContent(this.value)"> 
                            <img src="images/icon-user.png">
                        </option>
                    </a>-->
                    <a href="#shooping-cart">
                        <div>
                            <div id="cartUpdate"></div>
                            <option class="iconheader" value="cart" onclick="changeContent(this.value)">
                                <!--<img src="images/icon-shopping-cart.png">-->
                            </option>
                        </div>
                    </a>
                </nav>
            </div>
        </header>
        <div id="divpagename">
            <h2 id="pagename">  </h2>
        </div>
    </div>
    <aside>
        <div>
            <div>
                <h3>&#8927; Filtrar por categoria</h3>

                <div class="input">
                    <input type="checkbox" id="checkAlimento" name="alimento" value='A' onchange="filterCategory(this)">
                    <label class="plabel" for="checkAlimento">Alimento e bebidas</label>
                </div>

                <div class="input">
                    <input type="checkbox" id="checkR" name="Roupas" value='R' onchange="filterCategory(this)">
                    <label class="plabel" for="checkR">Roupas</label>
                </div>

                <div class="input">
                    <input type="checkbox" id="checkM" name="Mobilia" value='M' onchange="filterCategory(this)">
                    <label class="plabel" for="checkM">Mobília</label>
                </div>

                <div class="input">
                    <input type="checkbox" id="checkI" name="Informatica" value='I' onchange="filterCategory(this)">
                    <label class="plabel" for="checkI">Informática</label>
                </div>

                <div class="input">
                    <input type="checkbox" id="checkE" name="Eletrodomesticos" value='E' onchange="filterCategory(this)">
                    <label class="plabel" for="checkE">Eletrodomésticos</label>
                </div>

                <div class="input">
                    <input type="checkbox" id="checkC" name="Cosmeticos" value='C' onchange="filterCategory(this)">
                    <label class="plabel" for="checkC">Cosméticos</label>
                </div>
            </div>

            <div>
                <h3>&#8927; Filtrar por preço</h3>

                <div class="input">
                    <p class="text-label plabel">Preco mínimo</p>
                    <input type="number" min="0" max="9999" id="precoMin" onkeypress='validate(event)'>
                </div>

                <div class="input">
                    <p class="text-label plabel">Preco máximo</p>
                    <input type="number" min="0" max="9999" id="precoMax" onkeypress='validate(event)'>
                </div>

                <!--
                <div>
                    <input type="checkbox" id="checkPreco1" name="CheckPreco" value='0 5' onchange="filterPreco(this)">
                    <label for="checkPreco1">Abaixo de R$5,00</label>
                </div>

                <div>
                    <input type="checkbox" id="checkPreco2" name="CheckPreco" value='5 100' onchange="filterPreco(this)">
                    <label for="checkPreco2">Entre R$5,00 e 100</label>
                </div>

                <div>
                    <input type="checkbox" id="checkPreco3" name="CheckPreco" value='100 99999' onchange="filterPreco(this)">
                    <label for="checkPreco3">Acima de 100</label>
                </div>
                -->
            </div>

            <button id="botao-filtrar" onclick="storeValues()">FILTRAR &#10552;</button>

            <!--
            <div>
            <input type="checkbox" id="checkAll" name="all" value='all' onchange="filterCategory(this)">
            <label for="checkAll">All</label>
            </div>
            -->
        </div>
        <!--
        <select id="cboCategoria" onchange="filterCategory(this)">
            <option value="A">A</option>
            <option value="R">R</option>
            <option value="M">M</option>
            <option value="all">Nenhum</option>
        </select>
        -->
    </aside>
    <main id="content">

    </main>
    <footer>
        <div id="divredes">
            <a target="_blank" href="https://www.twitter.com"> 
                <img class="iconredes" src="images/icons/twitter.png">
            </a>
            <a target="_blank" href="https://www.instagram.com">
                <img class="iconredes" src="images/icons/instagram.png"> 
            </a>
            <a target="_blank" href="https://www.facebook.com">
                <img class="iconredes" src="images/icons/facebook.png"> 
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="iconredes" src="images/icons/youtube.png"> 
            </a>
        </div>
        <div id="divInfoFooter">
            <p> © 2012-2021, Lojasbrasileiranas.com, Inc. ou suas afiliadas </p>
            <p> Brasileiranas Serviços de Varejo Ltda. | CNPJ 69.666.661/1984-54 </p>
        </div>
    </footer>
    <div id="divBkUpbtt">
        <button onclick="backUp()" id="bkUpbtt"> &#5585; </button>
    </div>
</body>
<script type="text/javascript" src="js/util.js"> </script>
<script type="text/javascript" src="js/fixedScroll.js"> </script>
<script type="text/javascript" src="js/chargePages.js"> </script>
<script type="text/javascript" src="js/backUpbtt.js"> </script>
<script type="text/javascript" src="js/shooping/filterCategory.js"> </script>
<script type="text/javascript" src="js/localStorageFunc.js"> </script>
</html>
