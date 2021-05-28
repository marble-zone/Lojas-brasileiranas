window.addEventListener('load', function init(params) {
    if (sessionStorage['products']){
        let produtos = JSON.parse(sessionStorage.getItem('products'));
        let tam = produtos.length;
        for (let i = 0; i < tam; i++) {
            let tr = document.createElement("tr");

            let td = [];
            td[0] = document.createElement("td");
            td[1] = document.createElement("td");
            td[1].classList.add("product");
            td[2] = document.createElement("td");
            td[3] = document.createElement("td");
            td[4] = document.createElement("td");

            let img = document.createElement("img");
            img.classList.add("imgproduct");

            let name = document.createElement("p");
            name.classList.add("textproduct");
            let quant = document.createElement("p");
            quant.classList.add("quantnumber");

            let plus = document.createElement("button");
            plus.classList.add("plusbtt");
            let minus = document.createElement("button");
            minus.classList.add("minusbtt");
            //let excluir = document.createElement("button");
            //excluir.classList.add("btn-excluirItem");

            // add listeners
            plus.addEventListener('click', (event) => increaseQaunt(event));
            minus.addEventListener('click', (event) => decreaseQaunt(event));

            td[4].addEventListener('click', (event) => calcularTotal(event));

            // appends
            for (let index = 0; index < td.length; index++)
                tr.appendChild(td[index]);

            //td[0].appendChild(excluir);

            td[1].appendChild(img);
            td[1].appendChild(name);

            td[3].appendChild(plus);
            td[3].appendChild(quant);
            td[3].appendChild(minus);

            quant.innerHTML = "1";
            plus.innerHTML = "+";
            minus.innerHTML = "-";

            document.getElementsByTagName("tbody")[0].appendChild(tr);

            // add produto
            img.src = `${(produtos[i])[0]}`;
            name.innerHTML = `${(produtos[i])[1]}`;
            td[2].innerHTML = (produtos[i])[2];
            td[4].innerHTML = (produtos[i])[2];
        }
    }
})