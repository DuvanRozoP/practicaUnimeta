const validate = require('../Exercises/condicionales');

describe('Condicionales', () => {
  it('si "name" esta vacio debera retornar "nombre esta vacio"', () => {
    expect(validate('', '12345678')).toBe('nombre esta vacio');
  });

  it('si "password" esta vacio debera retornar "contrasena esta vacio"', () => {
    expect(validate('Usuario24', '')).toBe('contrasena esta vacio');
  });

  it('lo que llega por parametro "name" si tiene mas de 10 caracteres debera retornar "el nombre debe ser maximo de 10 caracteres"', () => {
    expect(validate('Usuario0123', '012345678')).toBe('el nombre debe ser maximo de 10 caracteres');
  });

  it('lo que llega por parametro "password" si tiene mas de 10 caracteres debera retornar "la contrasena debe ser maximo de 10 caracteres"', () => {
    expect(validate('Usuario', '0123456789A')).toBe(
      'la contrasena debe ser maximo de 10 caracteres'
    );
  });

  it('lo que llega por parametro "password" debe de tener minimo 8 caracteres de lo contraio debera retornar "la contrasena debe tener minimo 8 caracteres"', () => {
    expect(validate('Usuario', '0123456')).toBe('la contrasena debe tener minimo 8 caracteres');
  });

  it('si se ingresa los datos correctamente debera retornar "logueado correctamente"', () => {
    expect(validate('Usuario', '01234568')).toBe('logueado correctamente');
  });
});
