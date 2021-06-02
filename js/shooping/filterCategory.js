function filterCategory(cbo){
    sessionStorage.setItem('categoria', JSON.stringify(cbo.value))
    changeContent("home")
}