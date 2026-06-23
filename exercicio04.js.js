function classificarTriangulo(a, b, c) {
 
    if (a + b > c && a + c > b && b + c > a) {
     
        if (a === b && b === c) {
            return "Triângulo Equilátero (todos os lados iguais).";
        } else if (a === b || a === c || b === c) {
            return "Triângulo Isósceles (dois lados iguais).";
        } else {
            return "Triângulo Escaleno (todos os lados diferentes).";
        }
    } else {
 }
}
 
console.log(classificarTriangulo(5, 5, 5)); 
console.log(classificarTriangulo(5, 5, 3));
console.log(classificarTriangulo(3, 4, 5)); 
