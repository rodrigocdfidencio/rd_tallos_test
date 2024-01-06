const validateInputs = require('../utils/input-validator');

test('Valid inputs', () => {
  const css = [{ id: 1, score: 60 }, { id: 2, score: 20 }];
  const customers = [{ id: 1, score: 90 }, { id: 2, score: 20 }];
  const csAway = [2];

  expect(() => validateInputs(css, customers, csAway)).not.toThrow();
});

test('Invalid inputs: non-array parameters', () => {
  const css = 'invalid';
  const customers = [{ id: 1, score: 90 }, { id: 2, score: 20 }];
  const csAway = [2];

  expect(() => validateInputs(css, customers, csAway)).toThrow('Todos os parâmetros devem ser arrays.');
});

test('Invalid inputs: CS without id or score', () => {
  const css = [{ id: 1 }, { score: 20 }];
  const customers = [{ id: 1, score: 90 }, { id: 2, score: 20 }];
  const csAway = [2];

  expect(() => validateInputs(css, customers, csAway)).toThrow('Cada CS deve ser um objeto com propriedades "id" e "score".');
});

test('Invalid inputs: customer without id or score', () => {
  const css = [{ id: 1, score: 60 }, { id: 2, score: 20 }];
  const customers = [{ id: 1 }, { score: 20 }];
  const csAway = [2];

  expect(() => validateInputs(css, customers, csAway)).toThrow('Cada cliente deve ser um objeto com propriedades "id" e "score".');
});

test('Invalid inputs: non-numeric CS id in csAway', () => {
  const css = [{ id: 1, score: 60 }, { id: 2, score: 20 }];
  const customers = [{ id: 1, score: 90 }, { id: 2, score: 20 }];
  const csAway = ['invalid'];

  expect(() => validateInputs(css, customers, csAway)).toThrow('Os IDs dos CSs indisponíveis devem ser números.');
});