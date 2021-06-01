function filterCategory(option){
    sessionStorage.setItem('categoria', option.value)
    //alterar a classe do option pois está selecionado
    changeContent("home")
}