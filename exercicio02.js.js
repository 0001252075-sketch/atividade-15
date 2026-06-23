let precoCusto = 100.00; 
let margemLucroPorcentagem = 25.00; 

let margemDecimal = margemLucroPorcentagem / 100.00;


let precoVenda = precoCusto / (1.00 - margemDecimal);
let lucroDinheiro = precoVenda - precoCusto;


alert("Valor do Lucro: R$ " + lucroDinheiro.toFixed(2) + 
      "\nPreço Final de Venda: R$ " + precoVenda.toFixed(2));