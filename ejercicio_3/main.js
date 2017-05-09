/* Ejercicio 3
Vamos a crear una función que toma un parámetro que es un array de números.
La función va a devolver un array que contiene sólo los números pares del array original. */

function encuentraPares (numeros) {
  //Escribe aquí el código
  var numerosPares = [];
  var posicionPares = 0;

  for(var i = 0; i < numeros.length; i = i + 1){
    // i 0
    // numeros[i] = 2
    var numero = numeros[i];
    if(numero % 2 === 0){
      numerosPares[posicionPares] = numero; //meter numeros en numerosPares
      console.log(numerosPares);
      posicionPares = posicionPares + 1;
    }
  }
  return numerosPares;
}
encuentraPares ([2,3,4,6,8,9,12])
