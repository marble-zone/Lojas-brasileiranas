function chegarCartUp(){
    if (localStorage['quantProds']) {
        let prods = JSON.parse(localStorage.getItem('quantProds'));
        let divcartUp = document.getElementById("cartUpdate");
        if (prods > 0) {
            divcartUp.style.display = "block";
            divcartUp.innerHTML = `${prods}`;
        } else divcartUp.style.display = "none";
    }
}

window.onstorage = () => {
    chegarCartUp();
};

window.onload = () => {
    chegarCartUp();
}