<?php
    if(isset($_POST['itens'])){
        require_once 'connection.php';

        $query = "SELECT id_produto FROM produto WHERE ";
        $tam = sizeof($_POST['itens'])-1;
        for($i = 0; $i < $tam; $i++)
            $query .= "(nome = '{$_POST['itens'][$i][1]}' AND ABS(preco-{$_POST['itens'][$i][2]}) <= 0.001) OR ";
        $query .= "(nome = '{$_POST['itens'][$i][1]}' AND ABS(preco-{$_POST['itens'][$i][2]}) <= 0.001)
                    ORDER BY nome ASC;";
        sort($_POST['itens']);
        $itens = array();
        $result = $conn->query($query);
        if($result)
            while($row = $result->fetch_assoc())
                array_push($itens,$row['id_produto']);
        session_start();
        $query = "INSERT INTO venda (frete,quantTotal,subtotal,id_cliente) 
                    VALUES ({$_POST['frete']},{$_POST['quantTotal']},{$_POST['subtotal']},{$_SESSION['logado']});";
        $conn->query($query);
        $query = "SELECT id_venda FROM venda WHERE id_cliente = {$_SESSION['logado']} 
                    ORDER BY id_venda DESC LIMIT 1;";
        $result = $conn->query($query);
        if($conn->errno)
            echo $conn->error;
        $venda = $result->fetch_row();
        $tam++;
        for($i = 0; $i < $tam; $i++)
            $conn->query("INSERT INTO item (quant,id_produto,id_venda) 
                            VALUES ({$_POST['itens'][$i][3]},{$itens[$i]},{$venda[0]});");
    }
?>