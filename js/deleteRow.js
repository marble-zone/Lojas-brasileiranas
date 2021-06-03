/*var rows = document.querySelectorAll(".btn-excluirItem");

rows.forEach((btn) =>
btn.addEventListener('click', (event) => {
   var button = event.target;
   var td = button.parentNode;
   var row = td.parentNode;
   
   row.remove();
})
);*/

function deletarLinha(event) {
   if(!confirm("!! ESTÁ AÇÃO REMOVERÁ O PRODUTO DO SEU CARRINHO !!\n\nVocê tem certeza disto?"))
      return;
   let row = ((event.target).parentNode).parentNode;
   let tbody = row.parentNode;
   let index = Array.prototype.indexOf.call(tbody.children, row);
   carrinho = JSON.parse(sessionStorage.getItem('products'));
   sessionStorage.setItem('somaQuant', JSON.stringify(sessionStorage.getItem('somaQuant') - (carrinho[index])[3]));
   sessionStorage.setItem('somaTotal', JSON.stringify(sessionStorage.getItem('somaTotal') - (carrinho[index])[4]));
   carrinho.splice(index, 1);
   row.remove();
   sessionStorage.setItem('products', JSON.stringify(carrinho));
   const util = new UTIL();
   carrinho.length ? util.carrinhoNaoVazio() : util.carrinhoVazio();
}
