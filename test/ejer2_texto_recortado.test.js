//Programa una función que te devuelva el texto recortado
//según el número de caracteres indicados,
//pe.miFuncion("Hola Mundo", 4) devolverá "Hola"

import { describe, expect, it } from 'vitest';
import cortarTexto from '../src/ejer2_texto_recortado';

describe('cortarTexto', () => {
  it('should be a function', () => {
    expect(cortarTexto).toBeTypeOf('function');
  });
  it('should throw error if first parameter is missing', () => {
    expect(() => cortarTexto()).toThrow();
  });
  it('should throw error if second parameter is missing', () => {
    expect(() => cortarTexto('a')).toThrow();
  });
  it('should throw error if first parameter is not a string', () => {
    expect(() => cortarTexto(a)).toThrow();
  });
  it('should throw error if second parameter is not a number', () => {
    expect(() => cortarTexto('a', 'a')).toThrow();
  });
  it('should return a string', () => {
    expect(cortarTexto('a', 3)).toBeTypeOf('string');
  });
  it('should return a string with lenght second paramter value', () => {
    expect(cortarTexto('hola mundo', 4)).toBe('hola');
    expect(cortarTexto('hola mundo', 6)).toBe('hola m');
    expect(cortarTexto('hola mundo', 8)).toBe('hola mun');
  });
});
