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

    changeContent("home")
}

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