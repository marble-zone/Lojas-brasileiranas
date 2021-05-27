let plusbtts = document.querySelectorAll(".plusbtt");
let minusbtts = document.querySelectorAll(".minusbtt");

plusbtts.forEach((btt) =>
    btt.addEventListener('click', (event) => {
        let button = event.target;
        let p = button.parentNode.childNodes[3];
        number = parseInt(p.textContent);
        if (number < 20)
            p.innerHTML = `${number + 1}`
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
);