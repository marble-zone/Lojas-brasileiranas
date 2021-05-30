/*function linhaSomaTotal(item) {
    // HTML
    // linha 1
    let tr = document.createElement("tr");
    document.getElementsByTagName("tbody")[0].appendChild(tr);
    tr.appendChild(document.createElement("td"));

    // linha 2
    let td = [];
    td[0] = document.createElement("td");
    let nome = document.createElement("p");
    nome.classList.add("textproduct");
    nome.innerHTML = "Total";
    td[0].appendChild(nome);
    tr.appendChild(td[0]);

    // linha 3
    tr.appendChild(document.createElement("td"));

    // linha 4
    td[1] = document.createElement("td");
    let quant = document.createElement("p");
    quant.classList.add("quantnumber");
    quant.innerHTML = `${item[3]}`;
    td[1].appendChild(quant);
    tr.appendChild(td[1]);

    // linha 5
    td[2] = document.createElement("td");
    td[2].innerHTML = REAIS.format(item[4]);
    tr.appendChild(td[2]);
}*/

window.addEventListener('load', function init() {
    if (sessionStorage['products']){
        let itens = JSON.parse(sessionStorage.getItem('products'));
        let tam = itens.length;
        const util = new UTIL();
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
            excluir.innerHTML = "X";

            document.getElementsByTagName("tbody")[0].appendChild(tr);

            // add produto
            img.src = (itens[i])[0];
            name.innerHTML = (itens[i])[1];
            td[2].innerHTML = util.reais.format((itens[i])[2]);
            quant.innerHTML = `${(itens[i])[3]}`;
            td[4].innerHTML = util.reais.format((itens[i])[4]);

        }
        tam ? util.carrinhoNaoVazio() : util.carrinhoVazio();
    }
})