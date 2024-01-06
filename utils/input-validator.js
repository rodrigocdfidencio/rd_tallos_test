function validateArray(param) {
  if (!Array.isArray(param)) {
    throw new Error('Todos os parâmetros devem ser arrays.');
  }
}

function validateEntity(entity, entityType) {
  if (typeof entity !== 'object' || !('id' in entity) || !('score' in entity)) {
    throw new Error(`Cada ${entityType} deve ser um objeto com propriedades "id" e "score".`);
  }
}

function validateCsId(csId) {
  if (typeof csId !== 'number') {
    throw new Error('Os IDs dos CSs indisponíveis devem ser números.');
  }
}

function validateInputs(customerSuccess, customers, customerSuccessAway) {
  validateArray(customerSuccess);
  validateArray(customers);
  validateArray(customerSuccessAway);

  customerSuccess.forEach(cs => validateEntity(cs, 'CS'));
  customers.forEach(customer => validateEntity(customer, 'cliente'));

  customerSuccessAway.forEach(validateCsId);
}

module.exports = validateInputs;
