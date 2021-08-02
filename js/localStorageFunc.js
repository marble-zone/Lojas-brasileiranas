function chegarCartUp() {
    if (localStorage['quantProds']) {
        let prods = JSON.parse(localStorage.getItem('quantProds'));
        let divcartUp = document.getElementById("cartUpdate");
        //console.log('hehe');
        if (prods > 0) {
            divcartUp.style.display = "block";
            divcartUp.innerHTML = `${prods}`;
        } else {
            divcartUp.style.display = "none";
            localStorage.removeItem('quantProds');
        }
    }
}

function cartSize() {
    if (localStorage['cartSize']) {
        let height = JSON.parse(localStorage.getItem('cartSize'));
        let obj = document.querySelector('object');
        obj.style.width = "100%";
        obj.style.height = height + "em";
        //console.log("teste: " + height);
        localStorage.removeItem('cartSize');
    }
}

function confirmSize() {
    if (localStorage['confirmSize']) {
        let emote = util.emoji;

        document.getElementById("content").innerHTML = '<object type="text/html" data="confirmation.html"></object>';
        pagename.innerHTML = `${emote} Resumo do pedido ${emote}`

        let height = JSON.parse(localStorage.getItem('confirmSize'));
        let obj = document.querySelector('object');
        obj.style.width = "100%";
        obj.style.height = height + "em";
        //console.log("testekkk: " + height);
        localStorage.removeItem('confirmSize');
    }
}

function returnHome() {
    if (localStorage['return']) {
        let emote = util.emoji;

        document.getElementById("content").innerHTML = '<object type="text/html" data="home.php"></object>';
        document.getElementById("pagename").innerHTML = `${util.emoji} Bem vindo! Aproveite nossas ofertas do dia ${util.emoji}`;
        document.getElementsByTagName("aside")[0].style.display = "block";
        document.getElementsByTagName("main")[0].style.gridColumnStart = "2";

        let obj = document.querySelector('object');
        obj.style.width = "100%";
        obj.style.height = "132em";
        obj.style.overflow = "hidden";
        localStorage.removeItem('return');
    }
}


window.onstorage = () => {
    chegarCartUp();
    cartSize();
    confirmSize();
    returnHome();
};

window.onload = () => {
    chegarCartUp();
}