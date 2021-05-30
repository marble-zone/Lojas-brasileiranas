function VerifConsistenciaDados(div) {
    tam = PRODUTOS.length;
    for (let i = 0; i < tam; i++) {
        let valor = (div[2].textContent).replace(/,/g, ".");
        valor = parseFloat(valor.replace(/R\$/g, ""));
        if (PRODUTOS[i]['nome'].localeCompare(div[1].textContent) == 0 && PRODUTOS[i]['preco'] == valor)
            return false;
    }
    alert("!! ERRO !!\n\nUm erro de dados aconteceu. A página será recarregada para previnir maiores problemas");
    document.location.reload();
    return true;
}

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
    if(VerifConsistenciaDados(div))
        return;
    // image 0, name 1, price 2
    let dados_produto = [];
    dados_produto.push((div[0].src).substring((div[0].src).indexOf("images")));
    dados_produto.push(div[1].textContent);
    let itens = [];
    if (sessionStorage['products']){
        itens = JSON.parse(sessionStorage.getItem('products'));
        if (!_VerificaCarrinho(itens, dados_produto)){
            alert("!! ERRO !!\n\nEste produto já está adicionado no carrinho.");
            return;
        }
    }
    let price = (div[2].textContent).replace(/,/g, ".");
    price = parseFloat(price.replace(/R\$/g, ""));
    dados_produto.push(price);
    dados_produto.push(1);
    dados_produto.push(price);
    itens.push(dados_produto);
    sessionStorage.setItem('products', JSON.stringify(itens));
    if (sessionStorage['somaQuant']){
        sessionStorage.setItem('somaQuant', JSON.stringify(JSON.parse(sessionStorage.getItem('somaQuant'))+1));
        sessionStorage.setItem('somaTotal', JSON.stringify(JSON.parse(sessionStorage.getItem('somaTotal'))+price));
    }else{
        sessionStorage.setItem('somaQuant', JSON.stringify(1));
        sessionStorage.setItem('somaTotal', JSON.stringify(price));
    }
    alert("Produto adicionado no carrinho !!");
    //button.disabled = true;
    //button.innerHTML = "Added to Cart";
}