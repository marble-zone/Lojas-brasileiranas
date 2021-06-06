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
        document.getElementById("tablePrincipal").style.display = "block";
        document.getElementById("tableTotal").style.display = "grid";
        let eleQuant = document.getElementById("quantTotal");
        eleQuant.innerHTML = `${JSON.parse(sessionStorage.getItem('somaQuant'))}`;
        (eleQuant.nextElementSibling).innerHTML = util.reais.format(JSON.parse(sessionStorage.getItem('somaTotal')));
    }

    carrinhoVazio() {
        let tableTotal = document.getElementById("tableTotal");
        tableTotal.style.display = "none";
        
        /*let tr = document.createElement("div");
        tr.classList.add("tr");*/

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.paddingTop = "15px";
        div.style.paddingBottom = "15px";
        //border - bottom: 1px solid var(--purpleBlue);
        div.style.borderBottomStyle = "solid";
        div.style.borderBottomWidth = "1px";
        div.style.borderBottomColor = "#877aff";
        div.style.backgroundColor = "rgb(184, 119, 236)";
      
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
        p.style.fontSize = "1.4em";
        p.style.color = "white";
        p.style.fontWeight = "bold";
       

        div.appendChild(icon);
        div.appendChild(p);
        //tr.appendChild(div);
        let tbody = document.getElementById("tablePrincipal");
        tbody.appendChild(div);
        tbody.style.display = "block";
    }
}

function getNumSubStr(numberString) {
    let numList = numberString.split(' ');
    return numList
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