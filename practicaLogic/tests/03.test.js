const isPalindromo = require('../Exercises/funciones');

describe('Funciones', () => {
  it('Si al enviar "Luz azul"  debe devolver true', () => {
    expect(isPalindromo('Luz azul')).toBe(true);
  });
  it('Si al enviar "Radar"  debe devolver true', () => {
    expect(isPalindromo('Radar')).toBe(true);
  });
  it('Si al enviar "Seres"  debe devolver true', () => {
    expect(isPalindromo('Seres')).toBe(true);
  });
  it('Si al enviar "La ruta natural"  debe devolver true', () => {
    expect(isPalindromo('La ruta natural')).toBe(true);
  });
  it('Si al enviar un "No" palindromo debe devolver false', () => {
    expect(isPalindromo('noPalindromo')).toBe(false);
  });
  it('Si le llegue un parametro vacio retornara "dato invalido"', () => {
    expect(isPalindromo('')).toBe('dato invalido');
  });
  it('Si le llegue un parametro de otro tipo debera retornara "dato invalido"', () => {
    expect(isPalindromo([])).toBe('dato invalido');
    expect(isPalindromo({})).toBe('dato invalido');
    expect(isPalindromo(7)).toBe('dato invalido');
  });
  // dato invalido
});
