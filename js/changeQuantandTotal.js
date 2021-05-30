const util = new UTIL();

function calcularSomaQuant(num) {
    let quant = JSON.parse(sessionStorage.getItem('somaQuant'));
    sessionStorage.setItem('somaQuant', JSON.stringify(quant+num));
}

function calcularSomaTotal(antes, depois) {
    let total = JSON.parse(sessionStorage.getItem('somaTotal'));
    sessionStorage.setItem('somaTotal', JSON.stringify(total - antes + depois));
}

function calcularTotal(eleTotal, quant, carrinho, index) {
    const util = new UTIL();
    let total = (carrinho[index][2])*quant;
    eleTotal.innerHTML = util.reais.format(total);
    (carrinho[index])[3] = quant;
    calcularSomaTotal((carrinho[index])[4], total);
    (carrinho[index])[4] = total;
    sessionStorage.setItem('products', JSON.stringify(carrinho));
    util.carrinhoNaoVazio();
}

function increaseQuant(event) {
    let button = event.target;
    // tomar cuidado com "childNodes" e "children", depende totalmente da organização do HTML
    let tr = (button.parentNode).parentNode;
    let tbody = tr.parentNode;
    let index = Array.prototype.indexOf.call(tbody.children, tr);
    carrinho = JSON.parse(sessionStorage.getItem('products'));
    number = (carrinho[index])[3];
    if (number < 99){
        number++;
        p = (button.parentNode).childNodes[1];
        p.innerHTML = `${number}`;
        calcularSomaQuant(1);
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
        calcularSomaQuant(-1);
        calcularTotal(tr.childNodes[4], number, carrinho, index);
    }
}