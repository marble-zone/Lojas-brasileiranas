function emoji() {
     //return "&loz;" // lozango
     //return "&diams;" // diamante
    //return "&#8766;" // 'S' deitado
    //return "&#8776;" // duplo 'S' deitado
    //return "&#8781;" // uma cintura fina deitada???
    //return "&#8765;" // outro 'S' deitado
    return "&#8927;" // tipo uma seta
}

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
    document.getElementById("pagename").innerHTML = `${emoji()} Bem vindo! Aproveite nossas ofertas do dia ${emoji()}`
}

window.addEventListener("load", CallHome())

function changeContent(valor) {
    let emote = emoji();
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

