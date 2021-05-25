var rows = document.querySelectorAll(".btn-excluirItem");

rows.forEach((btn) =>
btn.addEventListener('click', (event) => {
   var button = event.target;
   var td = button.parentNode;
   var row = td.parentNode;
   
   row.remove();
})
);
