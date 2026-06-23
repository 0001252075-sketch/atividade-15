let numero = Number(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro positivo válido.");
} else {
    let contador = 0;
    let resto = numero;

    if (resto === 0) {
        contador = 1;
    } else {
        
        while (resto > 0) {
        resto = Math.floor(resto / 10); 
        contador++; 
     }
}

    console.log(`O número ${numero} possui ${contador} dígito(s).`);
}