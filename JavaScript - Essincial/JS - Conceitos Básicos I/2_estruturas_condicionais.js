function cl(string) {
    console.log(string);
}

cl('------- Estruturas Condicionais.');


var idade = 15;

// (if else) AND (if else if)
if (idade >= 18) {
    cl('Maior de idade.');
} else if (idade <= 14) {
    cl('Menor de idade.');
} else {
    cl('Sem comentários.')
}

// switch > case > break
switch (idade) {
    case 18:
        cl('Maior de idade.');
        break;
    case 14:
        cl('Menor de idade.');
        break;
    default:
        cl('Sem Comentárioss.');
        break;
}

// simplificando
var l = 'a';
var letra;

if (l === 'a') {
    letra = true;
} else {
    letra = false;
}
cl(letra)

// Modo Simplificado
letra = l === 'a';
cl(letra)