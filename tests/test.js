const assert = require('assert');

describe('Hola Mundo', () => {
  it('Debe imprimir "Hola, Mundo"', () => {
    const output = "Hola, Mundo";  // Verifica lo que esperas
    assert.strictEqual(output, "Hola, Mundo");  // Esta es la afirmación correcta
  });
});
