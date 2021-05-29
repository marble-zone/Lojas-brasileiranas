let dinheiro = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

window.addEventListener('load', function init() {
    /*let names, prices, images = []
    names = document.getElementsByClassName("name");
    prices = document.getElementsByClassName("price");
    images = document.getElementsByClassName("image");
    let tam = names.length;*/
    tam = produtos.length;
    for (let i = 0; i < tam; i++) {
        /*names[i].innerHTML = `${produtos[i]["nome"]}`;
        prices[i].innerHTML = `${dinheiro.format(produtos[i]["preco"])}`;
        images[i].src = `${produtos[i]["img"]}`;*/
        // criando e classificando kkk Pedro piadas
        card = document.createElement("div");
        card.classList.add("card");
        image = document.createElement("img");
        image.classList.add("image");
        image.alt = "Product";
        title = document.createElement("h1");
        title.classList.add("name");
        price = document.createElement("p");
        price.classList.add("price");
        pBtt = document.createElement("p");
        addCartbtt = document.createElement("button");
        addCartbtt.classList.add("addCartbtt");
        addCartbtt.innerHTML = "Add to Cart";

        // listener
        addCartbtt.addEventListener('click', (event) => saveProduct(event));

        // appends
        document.getElementsByClassName("flex-container")[0].appendChild(card);
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(pBtt);
        pBtt.appendChild(addCartbtt);
        
        // data.js info
        title.innerHTML = `${produtos[i]["nome"]}`;
        price.innerHTML = `${dinheiro.format(produtos[i]["preco"])}`;
        image.src = `${produtos[i]["img"]}`;

    }
})