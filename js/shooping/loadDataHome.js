var dinheiro = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

window.addEventListener('load', function init() {
    let names, prices, images = []
    names = document.getElementsByClassName("name");
    prices = document.getElementsByClassName("price");
    images = document.getElementsByClassName("image");
    let tam = names.length;
    for (let i = 0; i < tam; i++) {
        names[i].innerHTML = `${produtos[i]["nome"]}`;
        prices[i].innerHTML = `${dinheiro.format(produtos[i]["preco"])}`;
        images[i].src = `${produtos[i]["img"]}`;
    }
})