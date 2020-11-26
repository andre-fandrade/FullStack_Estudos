function cl(string) {
    console.log(string);
}

cl('------- Operadores Lógicos.');

var nome = 'andre'
var meunome = false
var and = 'AND &&: ';
var or = 'OR ||: ';
var not = 'NOT !: ';

// AND (&&) As duas condições tem que ser verdadeiras para ser verdadeiro.
if (nome === 'andre' && meunome === true) {
    cl(and + 'Verdadeiro')
} else {
    cl(and + 'Falso')
}

//OR (||) Uma ou outra condição tem que ser verdadeira
if (nome === 'andre' || meunome === true) {
    cl(or + 'Verdadeiro')
} else {
    cl(or + 'Falso')
}

//NOT (!) Uma verificação verdadeira se torna falsa ou vice-versa.
if (!nome === 'andre') {
    cl(not + 'Verdadeiro')
} else {
    cl(not + 'Falso')
}