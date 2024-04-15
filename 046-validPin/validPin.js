function validatePIN (pin) {
  let regex = /^(?:\d{4}|\d{6})$/;
    
  return regex.test(pin);
}