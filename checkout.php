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
      require 'address.php';
  } else {
      require 'loginBox.html';} ?>


</div>

<script type="text/javascript" src="js/util.js"> </script>
<script type="text/javascript" src="js/shooping/addShopCart.js"> </script>
<script type="text/javascript" src="js/deleteRow.js"> </script>
<script type="text/javascript" src="js/changeQuantandTotal.js"> </script>