
export function multiply(a, b) {
  return a * b;
}

export function add(a, b = 0) {
  
  if (!a) {
    return 'Unable to add with missing arguments';
  }
  
  return a + b;
}

export function getInitials(firstName, lastName) {
  return firstName && lastName && firstName.length > 0 && lastName.length > 0 ? (firstName[0] + lastName[0]).toUpperCase() : null;
};

module.export = {
  multiply,
  add,
  getInitials
}