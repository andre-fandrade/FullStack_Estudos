function cl(string) {
    console.log(string);
}

cl('------- Operador Unário e Ternário.');

var idade = 25;
idade++; // Operação Unária

// Operação ternária (Três Partes)
// (condição ? verdadeiro : falso)
var s = 'm';
var sexo = (s === 'm' ? 'Masculino' : 'Feminino');
cl(sexo)