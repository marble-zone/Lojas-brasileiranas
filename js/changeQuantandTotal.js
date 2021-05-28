function calcularTotal(eleTotal, quant, carrinho, index) {
    let total = (carrinho[index][2])*quant;
    eleTotal.innerHTML = `${dinheiro.format(total)}`;
    (carrinho[index])[3] = quant;
    (carrinho[index])[4] = total;
    sessionStorage.setItem('products', JSON.stringify(carrinho));
}

function increaseQuant(event) {
    let button = event.target;
    // tomar cuidado com "childNodes" e "children", depende totalmente da organização do HTML
    let tr = (button.parentNode).parentNode;
    let tbody = tr.parentNode;
    let index = Array.prototype.indexOf.call(tbody.children, tr);
    carrinho = JSON.parse(sessionStorage.getItem('products'));
    number = (carrinho[index])[3];
    if (number < 20){
        number++;
        p = (button.parentNode).childNodes[1];
        p.innerHTML = `${number}`;
        calcularTotal(tr.childNodes[4], number, carrinho, index);
    }
}

function decreaseQuant(event) {
    let button = event.target;
    // tomar cuidado com "childNodes" e "children", depende totalmente da organização do HTML
    let tr = (button.parentNode).parentNode;
    let tbody = tr.parentNode;
    let index = Array.prototype.indexOf.call(tbody.children, tr);
    carrinho = JSON.parse(sessionStorage.getItem('products'));
    number = (carrinho[index])[3];
    if (number > 1){
        number--;
        p = (button.parentNode).childNodes[1];
        p.innerHTML = `${number}`;
        calcularTotal(tr.childNodes[4], number, carrinho, index);
    }
}