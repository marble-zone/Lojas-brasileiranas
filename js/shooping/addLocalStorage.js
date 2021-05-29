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
    // image 0, name 1, price 2
    let dados_produto = [];
    dados_produto.push((div[0].src).substring((div[0].src).indexOf("images")));
    dados_produto.push(div[1].textContent);
    let produtos = [];
    if (sessionStorage['products']){
        produtos = JSON.parse(sessionStorage.getItem('products'));
        if (!_VerificaCarrinho(produtos, dados_produto)){
            alert("!! ERRO !!\n\nEste produto já está adicionado no carrinho.\n\nCaso este não seja o erro, recarregue a página e tente novamente.");
            return;
        }
    }
    let convertido = (div[2].textContent).replace(/,/g, ".");
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