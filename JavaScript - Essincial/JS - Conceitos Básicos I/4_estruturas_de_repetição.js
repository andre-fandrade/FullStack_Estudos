function cl(string) {
    console.log(string);
}

cl('------- Estruturas de Repetição.');

var array = ['for'];
var array2 = ['while'];
var array3 = ['do-while'];
// for (inicio; condição/parada; incremento) {...}
for(var i = 0; i <= 10; i++) {
    array.push(i);
}
cl(array)

// while(condição) {...}
var n = 0
while(n < 11) {
    array2.push(n);
    n++;
}

cl(array2)

//do while
var n2 = 0;
do {
    array3.push(n2);
    n2++;
} while (n2 < 11);

cl(array3);