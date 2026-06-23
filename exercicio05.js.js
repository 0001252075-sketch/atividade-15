let saldo = Number(prompt("Digite o seu saldo atual:"));
let saque = Number(prompt("Digite o valor que deseja sacar:"));


if (!isNaN(saldo) && !isNaN(saque)) {
    if (saque <= saldo) {
        
let novoSaldo = saldo - saque;
console.log(`Saque realizado com sucesso! Novo saldo: ${novoSaldo.toFixed(2)}`);
alert(`Saque realizado com sucesso! Novo saldo: ${novoSaldo.toFixed(2)}`);

        
    } else {
        
console.log("Saldo insuficiente");
alert("Saldo insuficiente");
    }
} else {
}