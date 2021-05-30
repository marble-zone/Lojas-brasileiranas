const util = new UTIL();

function AsideOn() {
    document.getElementsByTagName("aside")[0].style.display = "block";
    document.getElementsByTagName("main")[0].style.gridColumnStart = "2";
}

function AsideOff() {
    document.getElementsByTagName("aside")[0].style.display = "none";
    document.getElementsByTagName("main")[0].style.gridColumnStart = "1";
}

function CallHome() {
    document.getElementById("content").innerHTML = '<object type="text/html" data="home.html"></object>';
    document.getElementById("pagename").innerHTML = `${util.emoji} Bem vindo! Aproveite nossas ofertas do dia ${util.emoji}`;
}

window.addEventListener("load", CallHome())

function changeContent(valor) {
    let emote = util.emoji;
    pagename = document.getElementById("pagename");
    switch (valor) {
        case "home": 
            document.getElementById("content").innerHTML = '<object type="text/html" data="home.html"></object>';
            pagename.innerHTML = `${emote} Produtos à venda ${emote}`
            AsideOn();
            break;
        /*case "user": 
                document.getElementById("content").innerHTML = '<object type="text/html" data="confirmation.html"></object>';
                pagename.innerHTML = `${emote} Área do cliente ${emote}`
                AsideOff();
            break;*/
        case "cart": 
            document.getElementById("content").innerHTML = '<object type="text/html" data="checkout.html"></object>';
            pagename.innerHTML = `${emote} Carrinho de compras ${emote}`
            AsideOff();
            break;
        default: alert("Erro ao redirecionar a página! Por favor, notifique o administrador");
    }
}

