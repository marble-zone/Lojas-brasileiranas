function getAdress(){
    let address = [];

    address.push((document.getElementById('nome-completo')).value);
    address.push((document.getElementById('email')).value);
    address.push((document.getElementById('rua')).value);
    address.push((document.getElementById('num')).value);
    address.push((document.getElementById('bairro')).value);
    address.push((document.getElementById('cep')).value);
    address.push((document.getElementById('cidade')).value);
    address.push((document.getElementById('estado')).value);
    
    sessionStorage.setItem('address', JSON.stringify(address));
}


document.getElementById('address-info').addEventListener('submit', function () {
    localStorage.removeItem('cartSize');
    let qtdTotal = JSON.parse(sessionStorage.getItem('quantProds'));
    sessionStorage.removeItem('quantProds');
    if (qtdTotal == null) qtdTotal = 0;
    if (JSON.parse(sessionStorage.getItem('products')).length > 0) {
        getAdress();
        height = (85 + 3.13 * qtdTotal);
        //console.log("objectSizeConfirm" + height);
        localStorage.setItem('confirmSize', JSON.stringify(height));
    }
    else alert("Escolha um produto para comprar!");
});
