// https://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
  return func(...args);
}
// https://www.codewars.com/kata/for-the-sake-of-argument 
const numbers = (...arr) => arr.every(x => typeof x === 'number')
