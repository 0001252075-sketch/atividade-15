let numero = Number(prompt("Digite um número inteiro:"));


if (!isNaN(numero)) {
  
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par. E o seu triplo é: ${numero * 3}`);
    } else {
       
        console.log(`O número ${numero} é ímpar. E o seu quadrado é: ${numero ** 2}`);
    }
} else {
}