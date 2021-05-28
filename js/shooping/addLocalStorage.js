let cartbtts = document.querySelectorAll(".addCartbtt");

function _VerificaCarrinho(carrinho, produto) {
    let tam = carrinho.length;
    for (let i = 0; i < tam; i++)
        if (((carrinho[i])[1].localeCompare(produto[1])) == 0)
            return false;
    return true;
}

function saveProduct(event) {
    let button = event.target;
    let div = ((button.parentNode).parentNode).childNodes;
    // image 1, name 3, price 5
    let dados_produto = [];
    dados_produto.push((div[1].src).substring((div[1].src).indexOf("i")));
    dados_produto.push(div[3].textContent);
    let produtos = [];
    if (sessionStorage['products']){
        produtos = JSON.parse(sessionStorage.getItem('products'));
        if (!_VerificaCarrinho(produtos, dados_produto)){
            alert("!! ERRO !!\n\nEste produto já está adicionado no carrinho.");
            return;
        }
    }
    let convertido = (div[5].textContent).replace(/,/g, ".");
    let price = parseFloat(convertido.replace(/R\$/g, ""));
    dados_produto.push(price);
    dados_produto.push(1);
    dados_produto.push(price);
    produtos.push(dados_produto);
    sessionStorage.setItem('products', JSON.stringify(produtos));
    alert("Produto adicionado no carrinho !!");
    //button.disabled = true;
    //button.innerHTML = "Added to Cart";
}

cartbtts.forEach((btt) =>
    btt.addEventListener('click', (event) => saveProduct(event)));