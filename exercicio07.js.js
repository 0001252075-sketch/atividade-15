function calcularPotencia() {

let base = 2.5; 
let expoente = 4; 
let resultado = 1;

if (expoente === 0) {
resultado = 1;
} else {
    
for (let i = 0; i < expoente; i++) {
resultado *= base;
  }
}

console.log(`${base} elevado a ${expoente} é: ${resultado}`);
}
calcularPotencia();