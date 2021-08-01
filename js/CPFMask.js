function cpfMask(event){
    let cpf = event.target;

    if (cpf.value.length == 3){
        cpf.value += '.';
        return;
    }
    if (cpf.value.length == 7){
        cpf.value += '.';
        return;
    }
    if (cpf.value.length == 11){
        cpf.value += '-';
        return;
    }

    if (cpf.value.length > 13){
        event.preventDefault();
        return;
    }
    let numKey = parseInt(event.key);
    if (Number.isNaN(numKey))
        event.preventDefault();
}

document.getElementById("cpf").addEventListener("keypress", (event) => cpfMask(event));
document.getElementById("cpf").addEventListener("click", (event) => cpfMask(event));