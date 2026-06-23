let ano = Number(prompt("Digite um ano qualquer (ex: 2024):"), 10);
if (isNaN(ano)) {
    console.log("Por favor, digite um ano válido com números.");
} else {

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`O ano ${ano} é BISSEXTO.`);
    } else {
        console.log(`O ano ${ano} NÃO É bissexto.`);
    }
}