function filterCategory(value){
    //alert("Função filtrar categoria")
    sessionStorage.setItem('categoria', value)
    changeContent("home")
}