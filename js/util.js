// Converte um float para uma string no padrão monetário BRL com '.format'
class UTIL {
    constructor() {
        this.emoji = "&#8927;";
        this.reais = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',

            // Estas propriedades arredondam os valores 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    carrinhoNaoVazio() {
        document.querySelectorAll(".cart-table").forEach((tabela) => {
            tabela.style.display = "table";
        });
        let eleQuant = document.getElementById("quantTotal");
        eleQuant.innerHTML = `${JSON.parse(sessionStorage.getItem('somaQuant'))}`;
        (eleQuant.nextElementSibling).innerHTML = util.reais.format(JSON.parse(sessionStorage.getItem('somaTotal')));
    }

    carrinhoVazio() {
        let tabela = document.getElementById("tablePrincipal");
        let tableTotal = document.getElementById("tableTotal");
        tableTotal.style.display = "none";

        let tbody = tabela.children[1];
        
        let tr = document.createElement("tr");
        tr.style.height = "100px";
        
        let td = document.createElement("td");
        td.setAttribute("colspan", "5");
        td.style.textAlign = "center";

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
      
        let icon = document.createElement("span");
        icon.classList.add("iconify");
        icon.setAttribute("data-icon", "bi-cart-x-fill");
        icon.setAttribute("data-inline", "false");
        icon.style.color = "white";
        icon.style.height = "60px";
        icon.style.width = "60px";
        icon.style.marginRight = "50px";

        let p = document.createElement("p");
        p.innerText = "Carrinho Vazio";
        p.style.fontSize = "1.2em";
        p.style.color = "white";
       

        div.appendChild(icon);
        div.appendChild(p);
        td.appendChild(div);
        tr.appendChild(td);
        tbody.appendChild(tr);

        tabela.style.display = "table";
    }
}

/*var REAIS = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    // Estas propriedades arredondam os valores 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function EMOJI() {
    //return "&loz;" // lozango
    //return "&diams;" // diamante
    //return "&#8766;" // 'S' deitado
    //return "&#8776;" // duplo 'S' deitado
    //return "&#8781;" // uma cintura fina deitada???
    //return "&#8765;" // outro 'S' deitado
    return "&#8927;" // tipo uma seta
}

function CARRINHOVAZIO() {
    document.getElementById("pagename").innerHTML = `${EMOJI()} Seu carrinho está vazio ${EMOJI()}`;
    document.getElementById("tableTotal").style.display = "none";
}*/