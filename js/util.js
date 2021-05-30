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
        document.querySelectorAll(".cart-table").forEach((tabela) => {
            tabela.style.display = "none";
        });
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