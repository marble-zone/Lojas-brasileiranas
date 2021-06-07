function filterCategory(check){

    let listaFiltros = []

    if(sessionStorage.getItem('categoria') === null)
        sessionStorage.setItem('categoria', JSON.stringify(listaFiltros))

    listaFiltros = JSON.parse(sessionStorage.getItem('categoria'))
    if(check.value == 'all')
        listaFiltros = ['all']
    else
        if(check.checked){
            if(listaFiltros.indexOf('all') != -1)
                listaFiltros.splice(listaFiltros.indexOf('all'), 1)

            listaFiltros.push(check.value)
        }
        else{
            listaFiltros.splice(listaFiltros.indexOf(check.value), 1)
            if(listaFiltros.length == 0)
                listaFiltros.push('all')
        }

    sessionStorage.setItem('categoria', JSON.stringify(listaFiltros))

    //changeContent("home")
}

/*
function filterPreco(check){
    let precoMin = 0
    let precoMax = 99999

    if(check.checked){
        let precos = getNumSubStr(check.value)
        precoMin = precos[0]
        precoMax = precos[1]

        let checkboxes = document.getElementsByName('CheckPreco')
        checkboxes.forEach((item) => {
        if (item !== check) item.checked = false
    })
    }

    sessionStorage.setItem('precoMin', JSON.stringify(precoMin))
    sessionStorage.setItem('precoMax', JSON.stringify(precoMax))
}
*/

function checaProdutoFiltros(cat){
    let listaFiltros = ['all']
    if(sessionStorage.getItem('categoria') !== null)
        listaFiltros = JSON.parse(sessionStorage.getItem('categoria'))
    else
        return true

    for(filtro of listaFiltros){
        if(cat.localeCompare(filtro) == 0 || filtro.localeCompare('all') == 0)
            return true
    }

    return false
}

function checaProdutoPreco(preco){

    let precoMin = 0
    let precoMax = 99999

    if(sessionStorage.getItem('precoMin') !== null)
        precoMin = JSON.parse(sessionStorage.getItem('precoMin'))

    if(sessionStorage.getItem('precoMax') !== null)
        precoMax = JSON.parse(sessionStorage.getItem('precoMax'))
 
    if(preco < precoMin || preco > precoMax)
        return false

    return true
}

function storeValues(){
    precoMinElem = document.getElementById('precoMin')
    precoMaxElem = document.getElementById('precoMax')

    precoMin = parseFloat(precoMinElem.value)
    precoMax = parseFloat(precoMaxElem.value)

    if(precoMinElem.value == "")
        precoMin = 0
    
    if(precoMaxElem.value == "")
        precoMax = 99999

    sessionStorage.setItem('precoMin', JSON.stringify(precoMin))
    sessionStorage.setItem('precoMax', JSON.stringify(precoMax))

    changeContent('home')
}

function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\.|\,/;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }