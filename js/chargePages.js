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

function objSizeHome(){
    let obj = document.querySelector('object');
    obj.style.width = "100%";
    obj.style.height = "132em";
    obj.style.overflow = "hidden";
    if(localStorage['cartSize']){
        localStorage.removeItem('cartSize');
    }
    if(sessionStorage['quantProds']){
        sessionStorage.removeItem('quantProds');
    }
    if(sessionStorage['quantProds']){
        sessionStorage.removeItem('address');
    }
}

function objSizeCart(){
    let tam = (JSON.parse(sessionStorage.getItem('products')))
    if(tam){
        tam = tam.length;
    }
    else tam = 0;
    height = (62 + 6.3 * tam)
    let obj = document.querySelector('object');
    obj.style.width = "100%";
    obj.style.height = height + "em";
    obj.style.overflow = "hidden";
    //console.log("objectSizeCart"+height);
    sessionStorage.setItem('cartSize', JSON.stringify(height));
}

window.addEventListener("load", CallHome())
window.addEventListener("load", objSizeHome())

function changeContent(valor) {
    let emote = util.emoji;
    pagename = document.getElementById("pagename");
    switch (valor) {
        case "home": 
            document.getElementById("content").innerHTML = '<object type="text/html" data="home.html"></object>';
            pagename.innerHTML = `${emote} Produtos à venda ${emote}`
            AsideOn();
            objSizeHome();
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
            objSizeCart();
            break;
        default: alert("Erro ao redirecionar a página! Por favor, notifique o administrador");
    }
}

