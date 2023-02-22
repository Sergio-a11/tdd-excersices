//Programa una función que cuente el número de caracteres de una cadena de texto,
//pe.miFuncion("Hola Mundo") devolverá 10.

import { describe, expect, it } from 'vitest';
import contarCadena from '../src/ejer1_cadena_de_caracteres';

describe('contarCadena', () => {
  it('should be a function', () => {
    expect(contarCadena).toBeTypeOf('function');
  });
  it('should throw if first parameter is missing', () => {
    expect(() => contarCadena()).toThrow();
  });
  it('should throw if first parameter is not a string', () => {
    expect(() => contarCadena(3)).toThrow();
  });
  it('should return a number', () => {
    expect(contarCadena('hola')).toBeTypeOf('number');
  });
  it('should return the lenght of the string provided', () => {
    expect(contarCadena('hola')).toBe(4);
    expect(contarCadena('hola mundo')).toBe(10);
  });
});
