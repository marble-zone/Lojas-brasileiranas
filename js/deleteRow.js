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
   carrinho.splice(index, 1);
   row.remove();
   sessionStorage.setItem('products', JSON.stringify(carrinho));
   if (!carrinho.length){
      const util = new UTIL();
      util.carrinhoVazio();
   }
}
