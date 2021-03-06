<?php
    session_start();

    require_once "php/connection.php";
    //$query = 'SELECT nome,preco,caminho FROM produto;';
    $query = "SELECT nome,preco,caminho FROM produto WHERE";
    $estaFiltrado = false;

    if(isset($_SESSION['categ']) and !empty($_SESSION['categ']))
    {
        $query .= " id_cat IN (".implode(", ", $_SESSION['categ']).")";
        $estaFiltrado = true;
    }

    if(isset($_SESSION['precoMin']))
    {
        if($estaFiltrado) $query .= " AND";

        $query .= " preco >= {$_SESSION['precoMin']}";
        $estaFiltrado = true;
    }

    if(isset($_SESSION['precoMax']))
    {
        if($estaFiltrado) $query .= " AND";

        $query .= " preco <= {$_SESSION['precoMax']}";
        $estaFiltrado = true;
    }

    if(isset($_SESSION['ordem']) and $_SESSION['ordem'] != "" )
    {
        if(!$estaFiltrado) $query = substr($query, 0, -5);

        $query .= " ORDER BY preco {$_SESSION['ordem']}";
        $estaFiltrado = true;
    }

    if(!$estaFiltrado) $query = substr($query, 0, -5);
    $query .= ";";
    //echo $query;

    $result = $conn->query($query);
    $urlBase = "images/products/";
    $ext = ".png";
?>
<head> 
    <link rel="stylesheet" href="css/home.css"> 
</head>
<div class="flex-container">
   <?php  
        if ($result):
            setlocale(LC_MONETARY, 'pt_BR');
            while($row = $result->fetch_assoc()): ?>
                <div class="card">
                    <div class="divimage">
                        <img src="<?php echo $urlBase.$row['caminho'].$ext; ?>" alt="Product" class="image">
                    </div>
                    <h3 class="name"><?php echo $row['nome']; ?></h3>
                    <p class="price"><?php echo "R$ ".number_format($row['preco'], 2,',','.'); ?></p>
                    <p><button onclick="saveProduct(this)" class="addCartbtt">ADD TO CART ⨮</button></p>
                </div>
            <?php endwhile;
        endif;  ?> 
<!--<div class="card">
        <div class="divimage">
            <img class="image" alt="Product" src="images/products/bone.png">
        </div>
        <h3 class="name">Boné</h3>
        <p class="price">R$&nbsp;19,50</p>
        <p><button class="addCartbtt">ADD TO CART ⨮</button></p>
    </div>-->
</div>
<script type="text/javascript" src="js/util.js"> </script>
<script type="text/javascript" src="js/shooping/addLocalStorage.js"> </script>
<!--<script type="text/javascript" src="js/shooping/data.js"> </script>
<script type="text/javascript" src="js/shooping/loadDataHome.js"> </script>-->
<script type="text/javascript" src="js/shooping/filterCategory.js"> </script>