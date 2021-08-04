<?php

require_once "php/connection.php";

if (isset($_SESSION["logado"])) {
  $query = "SELECT nome,senha,cpf,email,logradouro,numero,bairro,cidade,estado,cep FROM cliente WHERE id_cliente = {$_SESSION["logado"]}";
  $result = $conn->query($query);
}

  if ($result):
    while ($row = $result->fetch_assoc()):
?>

    <form id="address-info">
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
            <select class="address" name="estado" id="estado"  required>
              <option value="AC" <?=($row["estado"] == 'AC')?'selected':''?> >Acre</option>
              <option value="AL" <?=($row["estado"] == 'AL')?'selected':''?> >Alagoas</option>
              <option value="AP" <?=($row["estado"] == 'AP')?'selected':''?> >Amapá</option>
              <option value="AM" <?=($row["estado"] == 'AM')?'selected':''?> >Amazonas</option>
              <option value="BA" <?=($row["estado"] == 'BA')?'selected':''?> >Bahia</option>
              <option value="CE" <?=($row["estado"] == 'CE')?'selected':''?> >Ceará</option>
              <option value="DF" <?=($row["estado"] == 'DF')?'selected':''?> >Distrito Federal</option>
              <option value="ES" <?=($row["estado"] == 'ES')?'selected':''?> >Espírito Santo</option>
              <option value="GO" <?=($row["estado"] == 'GO')?'selected':''?> >Goiás</option>
              <option value="MA" <?=($row["estado"] == 'MA')?'selected':''?> >Maranhão</option>
              <option value="MT" <?=($row["estado"] == 'MT')?'selected':''?> >Mato Grosso</option>
              <option value="MS" <?=($row["estado"] == 'MS')?'selected':''?> >Mato Grosso do Sul</option>
              <option value="MG" <?=($row["estado"] == 'MG')?'selected':''?> >Minas Gerais</option>
              <option value="PA" <?=($row["estado"] == 'PA')?'selected':''?> >Pará</option>
              <option value="PB" <?=($row["estado"] == 'PB')?'selected':''?> >Paraíba</option>
              <option value="PR" <?=($row["estado"] == 'PR')?'selected':''?> >Paraná</option>
              <option value="PE" <?=($row["estado"] == 'PE')?'selected':''?> >Pernambuco</option>
              <option value="PI" <?=($row["estado"] == 'PI')?'selected':''?> >Piauí</option>
              <option value="RJ" <?=($row["estado"] == 'RJ')?'selected':''?> >Rio de Janeiro</option>
              <option value="RN" <?=($row["estado"] == 'RN')?'selected':''?> >Rio Grande do Norte</option>
              <option value="RS" <?=($row["estado"] == 'RS')?'selected':''?> >Rio Grande do Sul</option>
              <option value="RO" <?=($row["estado"] == 'RO')?'selected':''?> >Rondônia</option>
              <option value="RR" <?=($row["estado"] == 'RR')?'selected':''?> >Roraima</option>
              <option value="SC" <?=($row["estado"] == 'SC')?'selected':''?> >Santa Catarina</option>
              <option value="SP" <?=($row["estado"] == 'SP')?'selected':''?> >São Paulo</option>
              <option value="SE" <?=($row["estado"] == 'SE')?'selected':''?> >Sergipe</option>
              <option value="TO" <?=($row["estado"] == 'TO')?'selected':''?> >Tocantins</option>
            </select>
          </div>
        </div>

      </div>
      <input type="submit" value="Finalizar Compra  &#10004;" id="btn-finalizar">
    </form>

  <?php
      endwhile;
    endif;

  ?>

    <script type="text/javascript" src="js/shooping/btnfinalizar.js"> </script>
    <script type="text/javascript" src="js/CEPMask.js"> </script>