<?php

require_once "connection.php";

if (isset($_SESSION["logado"])) {
  $query = "SELECT nome,senha,cpf,email,logradouro,numero,bairro,cidade,estado,cep FROM cliente WHERE id_cliente = {$_SESSION["logado"]}";
  $result = $mysqli->query($query);

  if ($result) :
    while ($row = $result->fetch_assoc())

?>

    <form action="cadastro.php" id="address-info">
      <div id="address-block">
        <span class="iconify icon" data-icon="mdi-truck-fast" data-inline="false"></span>
        <br>
        <h2>Dados de entrega: </h2>
        <br>

        <div id="block1">
          <div>
            <label for="nome-completo">Nome Completo</label>
            <input class="address" type="text" name="nome" placeholder="Nome" id="nome-completo" maxlength="60" value="<?php echo "".$row["nome"]; ?>" required>
          </div>
          <div>
            <label for="email">Email</label>
            <input class="address" type="email" name="email" placeholder="Email" id="email" maxlength="60" value="<?php echo "".$row["email"]; ?>" required>
          </div>
        </div>

        <div id="block2">
          <div>
            <label for="rua">Logradouro</label>
            <input class="address" type="text" name="rua" placeholder="Rua" id="rua" maxlength="60" value="<?php echo "".$row["logradouro"]; ?>" required>
          </div>

          <div>
            <label for="num">Nº</label>
            <input class="address" type="number" name="num" placeholder="Nº" id="num" min="0" max="99999" value="<?php echo "".$row["numero"]; ?>" required>
          </div>

          <div>
            <label for="cep">CEP</label>
            <input class="address" type="text" name="cep" placeholder="CEP" id="cep" min="0" max="99999999" value="<?php echo "".$row["cep"]; ?>" required>
          </div>
        </div>

        <div id="block3">
          <div>
            <label for="bairro">Bairro</label>
            <input class="address" type="text" name="bairro" placeholder="Bairro" id="bairro" maxlength="40" value="<?php echo "".$row["bairro"]; ?>" required>
          </div>

          <div>
            <label for="cidade">Cidade</label>
            <input class="address" type="text" name="cidade" placeholder="Cidade" id="cidade" maxlength="40" value="<?php echo "".$row["cidade"]; ?>" required>
          </div>

          <div>
            <label for="estado">Estado</label>
            <br>
            <!--<input type="text" name="estado" placeholder="Estado" id="estado" maxlength="20" required>-->
            <select class="address" name="estado" id="estado" value="<?php echo "".$row["estado"]; ?>" required>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>

      </div>
      <input type="submit" value="Finalizar Compra  &#10004;" id="btn-finalizar">
    </form>

    <script type="text/javascript" src="js/shooping/btnfinalizar.js"> </script>
    <script type="text/javascript" src="js/CEPMask.js"> </script>

<?php
endif;
}

?>