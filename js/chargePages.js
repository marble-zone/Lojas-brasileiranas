function CallHome() {
    document.getElementById("content").innerHTML = '<object type="text/html" data="home.html"></object>';
}

window.addEventListener("load", CallHome())

function changeContent(valor) {
    switch (valor) {
        case "home": CallHome();
            break;
        /*case "user": document.getElementById("content").innerHTML = '<object type="text/html" data="confirmation.html"></object>';
            break;*/
        case "cart": document.getElementById("content").innerHTML = '<object type="text/html" data="checkout.html"></object>';
            break;
        default: alert("Erro ao redirecionar a página! Por favor, notifique o administrador");
    }
}

