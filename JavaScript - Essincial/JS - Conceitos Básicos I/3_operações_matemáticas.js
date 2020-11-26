function cl(string) {
    console.log(string);
}

cl('------- Operações Matemáticas.');

var res;
var v1 = 10;
var v2 = 11;

res = v1 + v2; // Soma
cl(res);

res = v1 - v2; // Subtração
cl(res);

res = v1 * v2; // Multiplicação
cl(res);

res = v1 / v2; // Divisão
cl(res);

res = v1 % 2; // Módulo, resto de divisão.
cl(res); // 0 Par 1 Inpar

//Incremento e Decremento
cl('-')
cl(v1 += v2);
cl(v2 -= v1);
cl(v1++); //Imprime o valor depois incrementa.
cl(v1--); //Imprime o valor depois decrementa.
cl(++v1); //Incrementa depois imprime o valor.
cl(--v1); //Decrementa depois imprime o valor.
