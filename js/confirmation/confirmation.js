document.getElementById('confirm').addEventListener('click', function(){
    localStorage.setItem('return', JSON.stringify(1));
});

function salvarRegistros(itens, quantTotal, subtotal, frete){
    return $.ajax({
        url: "php/salvarRegistros.php",
        method: "POST",
        data: { 'itens': itens, 
                'quantTotal': quantTotal,
                'subtotal': subtotal,
                'frete': frete, }
      })
}

window.addEventListener("load",function(){
    if (sessionStorage['products']){
        const util = new UTIL();
        let itens = JSON.parse(sessionStorage.getItem('products'));
        sessionStorage.removeItem('products');
        let quantTotal = JSON.parse(sessionStorage.getItem('somaQuant'));
        sessionStorage.removeItem('somaQuant');
        let subtotal = JSON.parse(sessionStorage.getItem('somaTotal'));
        sessionStorage.removeItem('somaTotal');
        let tam = itens.length;

        let frete = Math.random() * 50 + 1;
        let total = subtotal + frete;
        document.getElementById("subtotal").innerText = util.reais.format(subtotal);
        document.getElementById("frete").innerText = util.reais.format(frete);
        document.getElementById("total").innerText = util.reais.format(total);

        let address = JSON.parse(sessionStorage.getItem('address'));
        sessionStorage.removeItem('address');

        document.getElementById("nome").innerText = address[0];
        document.getElementById("email").innerText = address[1];
        document.getElementById("numpedido").innerText = Math.floor(Math.random() * 50000 + 10000);
        document.getElementById("data").innerText = new Date().toLocaleDateString();
        document.getElementById("rua").innerText = address[2]+", Nº"+address[3];
        document.getElementById("bairro").innerText = address[4];
        document.getElementById("cep").innerText = address[5];
        document.getElementById("cidade").innerText = address[6]+" - "+address[7];

        document.getElementById("tempoFrete").innerText = "Sua encomenda chegará em "+ Math.floor(Math.random() * (5 + 1) + 3) + " dias! =)"

        for (let i = 0; i < tam; i++) {
            let tr = document.createElement('tr');

            let td = [];

            td[1] = document.createElement("td");
            td[1].classList.add("tdTable");
            tr.appendChild(td[1]);

            td[2] = document.createElement("td");
            td[2].classList.add("tdTable");
            tr.appendChild(td[2]);

            td[3] = document.createElement("td");
            td[3].classList.add("tdTable");
            tr.appendChild(td[3]);

            td[4] = document.createElement("td");
            td[4].classList.add("tdTable");
            tr.appendChild(td[4]);

            td[1].innerHTML = (itens[i])[1];
            td[2].innerHTML = `${(itens[i])[3]}`;
            td[3].innerHTML = util.reais.format((itens[i])[2]);
            td[4].innerHTML = util.reais.format((itens[i])[4]);

            document.getElementById("tbody").appendChild(tr);
        }
        salvarRegistros(itens, quantTotal, subtotal, frete);
    }
})