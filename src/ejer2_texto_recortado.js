//Programa una función que te devuelva el texto recortado
//según el número de caracteres indicados,
//pe.miFuncion("Hola Mundo", 4) devolverá "Hola"

function cortarTexto(cadena, corte) {
  if (!cadena) throw new Error('first parameter missing');
  //if (!corte) throw new Error('first parameter missing');
  if (typeof corte !== 'number') throw new Error('should be a number');
  if (typeof cadena !== 'string') throw new Error('should be a string');

  return cadena.slice(0, corte);
}

module.exports = cortarTexto;
