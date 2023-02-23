const countAge = require('../Exercises/objetos');

describe('Objetos', () => {
  it('Al enviar el objeto debera retornar el valor correcto', () => {
    expect(
      countAge({
        Luna: {
          edad: 25,
        },
        Sebas: {
          edad: 7,
        },
        Marce: {
          edad: 34,
        },
        Nicky: {
          edad: 15,
        },
      })
    ).toBe(2);
  });
});
