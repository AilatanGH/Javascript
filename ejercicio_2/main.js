
/* Ejercicio 2
Vamos a crear una función JavaScript que toma un parámetro que es una cadena
(texto). Si la cadena es de longitud impar, devuelve el carácter central. Si la
longitud de la cadena es par, devuelve "Sólo funciono con cadenas de longitud
impar". */

function caracterCentral(cadena) {
  //Escribe aquí el código

  for(var i = 0; i < cadena.length; i++) {
    if(cadena.length % 2 === 0) {
      return "Sólo funciono con cadenas de longitud impar"
    } else {
      var i = (cadena.length - 1) / 2;
      return cadena[i]
    }
  }
}
caracterCentral("sabanas")
