//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCadena(cadena) {
  console.log(typeof cadena, cadena);
  if (typeof cadena !== 'string') throw new Error('Cadena no valida');

  return cadena.length;
}

module.exports = contarCadena;
