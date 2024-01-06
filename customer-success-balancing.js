const validateInputs = require('./utils/input-validator');

/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */

function orderParams(params) {
  return params.sort((a, b) => a.score - b.score);
}

function customerSuccessBalancing(
  customerSuccess,
  customers,
  customerSuccessAway
) {

  validateInputs(customerSuccess, customers, customerSuccessAway);

  let csAvailable = customerSuccess.filter(cs => !customerSuccessAway.includes(cs.id));

  csAvailable = orderParams(csAvailable);
  customers = orderParams(customers);

  let csIndex = 0;
  const customerServed = new Array(csAvailable.length).fill(0);

  for (const customer of customers) {
    while (csIndex < csAvailable.length && csAvailable[csIndex].score < customer.score) {
      csIndex++;
    }
    if (csIndex === csAvailable.length) {
      break;
    }
    customerServed[csIndex]++;
  }

  let maxCustomerServed = Math.max(...customerServed);
  let csMostCustomers = customerServed.lastIndexOf(maxCustomerServed);

  if (customerServed.indexOf(maxCustomerServed) !== csMostCustomers) {
    return 0;
  }

  return csAvailable[csMostCustomers].id;
}

module.exports = customerSuccessBalancing;
