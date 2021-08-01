<?php
session_start();
?>

<head>
  <link rel="stylesheet" href="css/checkout.css" />
  <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
</head>
<div id="container">
  <div id="cart-table">
    <div class="thead">
      <p class="th th1"> Produto </p>
      <p class="th th2"> Preço Unit. </p>
      <p class="th th3"> Qtd. </p>
      <p class="th th4"> Total </p>
    </div>
    <div id="tablePrincipal">
      <!--<div class="tr">
        <div class="td1">
          <button class="btn-excluirItem marginBtn">X</button>
          <img class="imgproduct" src="images/products/bone.png">
        </div>
        <p class="td2 marginText"> Boné </p>
        <p class="td3 marginText"> R$10,00 </p>
        <div class="td4 marginBtn">
          <button class="plusbtt" >+</button>
          <p class="quantnumber" >1</p>
          <button class="minusbtt" >-</button>
        </div>
        <p class="td5 marginText"> R$1.6,00</p>
      </div>-->
    </div>
    <div class="thead" id="tableTotal">
      <p class="th th1"> Total </p>
      <p class="th th2"> </p>
      <p id="quantTotal" class="th th3"> 50 </p>
      <p class="th th4"> R$12.786,00 </p>
    </div>

    <!--<table class="cart-table" id="tablePrincipal">
    <thead>
      <th></th>
      <th>Produto</th>
      <th>Preço</th>
      <th>Qtd.</th>
      <th>Total</th>
    </thead>
    <tbody>
      <tr>
        <td><button class="btn-excluirItem">X</button></td>
        <td class="product">
          <img class="imgproduct" src="">
          <p class="textproduct">  </p>
        </td>
        <td></td>
        <td>
          <button class="plusbtt">+</button>
          <p class="quantnumber">1</p>
          <button class="minusbtt">-</button>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <table id="tableTotal" class="cart-table">
    <thead>
      <th></th>
      <th> Total </th>
      <th></th>
      <th id="quantTotal"></th>
      <th></th>
    </thead>
  </table>-->
  </div>


  <?php
  if (isset($_SESSION["logado"])) {
    echo " <form action='#' id='address-info'>
    <div id='address-block'>
      <span class='iconify icon' data-icon='mdi-truck-fast' data-inline='false'></span>
      <br>
      <h2>Dados de entrega: </h2>
      <br>

      <div id='block1'>
        <div>
          <label for='nome-completo'>Nome Completo</label>
          <input class='address' type='text' name='nome' placeholder='Nome' id='nome-completo' maxlength='60' required>
        </div>
        <div>
          <label for='email'>Email</label>
          <input class='address' type='email' name='email' placeholder='Email' id='email'  maxlength='60' required>
        </div>
      </div>

      <div id='block2'>
        <div>
          <label for='rua'>Rua</label>
          <input class='address' type='text' name='rua' placeholder='Rua' id='rua' maxlength='60' required>
        </div>

        <div>
          <label for='num'>Nº</label>
          <input class='address' type='number' name='num' placeholder='Nº' id='num' min='0' max ='99999' required>
        </div>

        <div>
          <label for='cep'>CEP</label>
          <input class='address' type='text' name='cep' placeholder='CEP' id='cep' min='0'  max='99999999' required>
        </div>
      </div>

      <div id='block3'>
        <div>
          <label for='bairro'>Bairro</label>
          <input class='address' type='text' name='bairro' placeholder='Bairro' id='bairro' maxlength='40' required>
        </div>

        <div>
          <label for='cidade'>Cidade</label>
          <input class='address' type='text' name='cidade' placeholder='Cidade' id='cidade' maxlength='40' required>
        </div>

        <div>
          <label for='estado'>Estado</label>
          <br>
          <!--<input type='text' name='estado' placeholder='Estado' id='estado' maxlength='20' required>-->
          <select class='address' name='estado' id='estado'>
            <option value='AC'>Acre</option>
            <option value='AL'>Alagoas</option>
            <option value='AP'>Amapá</option>
            <option value='AM'>Amazonas</option>
            <option value='BA'>Bahia</option>
            <option value='CE'>Ceará</option>
            <option value='DF'>Distrito Federal</option>
            <option value='ES'>Espírito Santo</option>
            <option value='GO'>Goiás</option>
            <option value='MA'>Maranhão</option>
            <option value='MT'>Mato Grosso</option>
            <option value='MS'>Mato Grosso do Sul</option>
            <option value='MG'>Minas Gerais</option>
            <option value='PA'>Pará</option>
            <option value='PB'>Paraíba</option>
            <option value='PR'>Paraná</option>
            <option value='PE'>Pernambuco</option>
            <option value='PI'>Piauí</option>
            <option value='RJ'>Rio de Janeiro</option>
            <option value='RN'>Rio Grande do Norte</option>
            <option value='RS'>Rio Grande do Sul</option>
            <option value='RO'>Rondônia</option>
            <option value='RR'>Roraima</option>
            <option value='SC'>Santa Catarina</option>
            <option value='SP'>São Paulo</option>
            <option value='SE'>Sergipe</option>
            <option value='TO'>Tocantins</option>
          </select>
        </div>
      </div>

    </div>
    <input type='submit' value='Finalizar Compra  &#10004;' id='btn-finalizar'>
  </form>
  
  <script type='text/javascript' src='js/shooping/btnfinalizar.js'> </script>
  <script type='text/javascript' src='js/CEPMask.js'> </script>";
  } else {
    echo "<div id='login'>
            <span id='key' class='iconify icon' data-icon='fontisto:key' data-inline='false'></span>
            <h1>Já tem cadastro? </h1>
            <a href='login.html'  target='_top'>Fazer login</a>
            <h3>ou</h3>
            <h2> Não tem conta? </h1>
            <a href='cadastro.html' target='_top'>Cadastre-se</a>
          </div>";} ?>


</div>

<script type="text/javascript" src="js/util.js"> </script>
<script type="text/javascript" src="js/shooping/addShopCart.js"> </script>
<script type="text/javascript" src="js/deleteRow.js"> </script>
<script type="text/javascript" src="js/changeQuantandTotal.js"> </script>