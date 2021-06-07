window.addEventListener('load', function init() {
    const util = new UTIL();
    if (sessionStorage['products']){
        let itens = JSON.parse(sessionStorage.getItem('products'));
        let tam = itens.length;
        for (let i = 0; i < tam; i++) {
            // HTML
            let tr = document.createElement("div");
            tr.classList.add("tr");
            
            let td = [];

            td[0] = document.createElement("div");
            td[0].classList.add("td1");
            tr.appendChild(td[0]);

            let excluir = document.createElement("button");
            excluir.classList.add("btn-excluirItem");
            excluir.classList.add("marginBtn");
            excluir.innerHTML = "&#215;";
            td[0].appendChild(excluir);

            let img = document.createElement("img");
            img.classList.add("imgproduct");
            td[0].appendChild(img);

            td[1] = document.createElement("p");
            td[1].classList.add("td2"); 
            td[1].classList.add("marginText");
            tr.appendChild(td[1]);

            td[2] = document.createElement("p");
            td[2].classList.add("td3");
            td[2].classList.add("marginText");
            tr.appendChild(td[2]);

            td[3] = document.createElement("div");
            td[3].classList.add("td4"); 
            td[3].classList.add("marginBtn");
            tr.appendChild(td[3]);

            let plus = document.createElement("button");
            plus.classList.add("plusbtt");
            plus.innerHTML = "+";
            td[3].appendChild(plus);

            let quantnumber = document.createElement("p");
            quantnumber.classList.add("quantnumber");
            td[3].appendChild(quantnumber);

            let minus = document.createElement("button");
            minus.classList.add("minusbtt");
            minus.innerHTML = "-";
            td[3].appendChild(minus);

            td[4] = document.createElement("p");
            td[4].classList.add("td5");
            td[4].classList.add("marginText");
            tr.appendChild(td[4]);

            // add listeners
            plus.addEventListener('click', (event) => increaseQuant(event));
            minus.addEventListener('click', (event) => decreaseQuant(event));
            excluir.addEventListener('click', (event) => deletarLinha(event));

            // add produto
            img.src = (itens[i])[0];
            td[1].innerHTML = (itens[i])[1];
            td[2].innerHTML = util.reais.format((itens[i])[2]);
            quantnumber.innerHTML = `${(itens[i])[3]}`;
            td[4].innerHTML = util.reais.format((itens[i])[4]);

            // append final
            document.getElementById("tablePrincipal").appendChild(tr);
        }
        tam > 0 ? util.carrinhoNaoVazio() : util.carrinhoVazio();
            
    }else util.carrinhoVazio();
    if (localStorage['quantProds']){
        let prods = JSON.parse(localStorage.getItem('quantProds'));
        sessionStorage.setItem('quantProds', JSON.stringify(prods));
        localStorage.setItem('quantProds', JSON.stringify(0));
    }
})