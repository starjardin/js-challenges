/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] + 1 == 10) {
      digits[digits.length - 1] = 1
      digits[digits.length] = 0
  } else {
      digits[digits.length - 1] = digits[digits.length - 1] + 1
  }

  return digits
};
