var num =0;
var i = 0;
var divisores = "";
var sumaDivisores = 0;

num = prompt("Escribe un numero");
//FASE 1

for (i=1;i < num; i++) {
    if (num % i === 0) {
        divisores = divisores + i + " ";
        sumaDivisores = sumaDivisores + i;
    } 
}
        
    alert("Los divisores de " + num + " son: " + divisores);
alert("La suma de los divisores es: " + sumaDivisores);

//FASE 2

if (num == sumaDivisores) {
    alert("SI es un número perfecto");
} else {
    alert("NO es un número perfecto");
}




