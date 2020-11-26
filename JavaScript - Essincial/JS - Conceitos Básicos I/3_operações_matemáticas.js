function cl(string) {
    console.log(string);
}

cl('------- Operações Matemáticas.');

var res;
var vetor = [];
var v1 = 10;
var v2 = 11;

res = v1 + v2; // Soma
vetor.push('Soma: ' + res);

res = v1 - v2; // Subtração
vetor.push('Subtração: ' +res);

res = v1 * v2; // Multiplicação
vetor.push('Multiplicação: ' +res);

res = v1 / v2; // Divisão
vetor.push('Divisão: ' +res);

res = v1 % 2; // Módulo, resto de divisão.
vetor.push('Módulo: ' +res); // 0 Par 1 Inpar

//Incremento e Decremento
vetor.push('Soma Simplificada: ' + (v1 += v2));
vetor.push('Subtração Simplificada: ' + (v2 -= v1));
vetor.push('Imp. Incrementa: ' + (v1++)); //Imprime o valor depois incrementa.
vetor.push('Imp. Decrementa: ' + (v1--)); //Imprime o valor depois decrementa.
vetor.push('Incrementa dps Imp.: ' + (++v1)); //Incrementa depois imprime o valor.
vetor.push('Decrementa dps Imp.: ' + (--v1)); //Decrementa depois imprime o valor.
cl(vetor)