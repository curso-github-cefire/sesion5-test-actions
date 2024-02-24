function esPar(numero) {
  if (typeof numero !== 'number' || isNaN(numero)) {
    throw new Error('El argumento debe ser un número válido.');
  }
  numero = Math.abs(numero);
  return numero % 2 === 0;
}

module.exports = esPar;
