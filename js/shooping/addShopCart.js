window.addEventListener('load', function init() {
    const util = new UTIL();
    if (sessionStorage['products']){
        let itens = JSON.parse(sessionStorage.getItem('products'));
        let tam = itens.length;
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
            let excluir = document.createElement("button");
            excluir.classList.add("btn-excluirItem");

            // add listeners
            plus.addEventListener('click', (event) => increaseQuant(event));
            minus.addEventListener('click', (event) => decreaseQuant(event));
            excluir.addEventListener('click', (event) => deletarLinha(event));

            //quant.addEventListener('change', (event) => calcularTotal(event));

            // appends
            for (let index = 0; index < td.length; index++)
                tr.appendChild(td[index]);

            td[0].appendChild(excluir);

            td[1].appendChild(img);
            td[1].appendChild(name);

            td[3].appendChild(plus);
            td[3].appendChild(quant);
            td[3].appendChild(minus);

            plus.innerHTML = "+";
            minus.innerHTML = "-";
            excluir.innerHTML = "&#215;";

            document.getElementsByTagName("tbody")[0].appendChild(tr);

            // add produto
            img.src = (itens[i])[0];
            name.innerHTML = (itens[i])[1];
            td[2].innerHTML = util.reais.format((itens[i])[2]);
            quant.innerHTML = `${(itens[i])[3]}`;
            td[4].innerHTML = util.reais.format((itens[i])[4]);

        }
        if(tam > 0) 
            util.carrinhoNaoVazio();
            
    }else util.carrinhoVazio();
    if (localStorage['quantProds'])
        localStorage.setItem('quantProds', JSON.stringify(0));
})