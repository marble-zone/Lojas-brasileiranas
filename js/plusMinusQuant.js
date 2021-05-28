//let plusbtts = document.querySelectorAll(".plusbtt");
//let minusbtts = document.querySelectorAll(".minusbtt");

function increaseQaunt(event) {
    let button = event.target;
    // tomar cuidado com "childNodes", depende totalmente da organização do HTML
    let p = button.parentNode.childNodes[1];
    number = parseInt(p.textContent);
    if (number < 20)
        p.innerHTML = `${number + 1}`
}

function decreaseQaunt(event) {
    let button = event.target;
    let p = button.parentNode.childNodes[1];
    number = parseInt(p.textContent);
    if (number > 1)
        p.innerHTML = `${number - 1}`
}

/*plusbtts.forEach((btt) =>
    btt.addEventListener('click', (event) => {
        let button = event.target;
        let p = button.parentNode.childNodes[3];
        number = parseInt(p.textContent);
        if (number < 20)
            p.innerHTML = `${number + 1}`
        alert("dfssdfds");
    })
);

minusbtts.forEach((btt) =>
    btt.addEventListener('click', (event) => {
        let button = event.target;
        let p = button.parentNode.childNodes[3];
        number = parseInt(p.textContent);
        if (number > 1)
            p.innerHTML = `${number - 1}`
    })
);*/