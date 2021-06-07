function onlyNumbers(event) {
    let cep = event.target;
    if (cep.value.length == 5){
        cep.value += '-';
        return;
    } else 
    if (cep.value.length > 8){
        event.preventDefault();
        return;
    }
    let numKey = parseInt(event.key);
    if (Number.isNaN(numKey))
        event.preventDefault();
}

document.getElementById("cep").addEventListener("keypress", (event) => onlyNumbers(event));
document.getElementById("cep").addEventListener("click", (event) => onlyNumbers(event));