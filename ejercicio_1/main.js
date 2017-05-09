/* Ejercicio 1
Creamos una función que tomará como parámetros un número y un array de números.
La función va a devolver el número de veces que está repetido ese número en el
array. Por ejemplo, si le pasamos un 1 y [1,3,4,2,1,3,4,5],  la función devolverá
un 2, porque el número 1 aparece dos veces en el array. */

function cuentaNumeros (numero, arrayNumeros){
  //Escribe aquí el código
  var total = 0;
  for (var i=0; i<arrayNumeros.length; i= i+1) {
    if(arrayNumeros[i] === numero){
      total = total + 1;
    }
  }
  return total
}
cuentaNumeros (2, [2,4,1,5,2,6,2])
