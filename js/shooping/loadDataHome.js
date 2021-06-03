window.addEventListener('load', function init() {
    /*let names, prices, images = []
    names = document.getElementsByClassName("name");
    prices = document.getElementsByClassName("price");
    images = document.getElementsByClassName("image");
    let tam = names.length;*/
    tam = PRODUTOS.length;
    for (let i = 0; i < tam; i++) {
        /*names[i].innerHTML = `${produtos[i]["nome"]}`;
        prices[i].innerHTML = `${dinheiro.format(produtos[i]["preco"])}`;
        images[i].src = `${produtos[i]["img"]}`;*/
        // criando e classificando kkk Pedro piadas
        card = document.createElement("div");
        card.classList.add("card");
        divimage = document.createElement("div");
        divimage.classList.add("divimage");
        image = document.createElement("img");
        image.classList.add("image");
        image.alt = "Product";
        title = document.createElement("h3");
        title.classList.add("name");
        price = document.createElement("p");
        price.classList.add("price");
        pBtt = document.createElement("p");
        addCartbtt = document.createElement("button");
        addCartbtt.classList.add("addCartbtt");
        addCartbtt.innerHTML = "ADD TO CART &#10798;";

        // listener
        addCartbtt.addEventListener('click', (event) => saveProduct(event));

        // appends
        document.getElementsByClassName("flex-container")[0].appendChild(card);
        divimage.appendChild(image);
        card.appendChild(divimage);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(pBtt);
        pBtt.appendChild(addCartbtt);
        
        // data.js info
        const util = new UTIL();
        title.innerHTML = PRODUTOS[i]["nome"];
        price.innerHTML = util.reais.format(PRODUTOS[i]["preco"]);
        image.src = PRODUTOS[i]["img"];
    }
})