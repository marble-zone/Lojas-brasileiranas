// Converte um float para uma string no padrão monetário BRL com '.format'
var REAIS = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

    // Estas propriedades arredondam os valores 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});