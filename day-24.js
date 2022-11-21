// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function last(list) {
  let arg = arguments[arguments.length - 1];
  return arg[arg.length - 1] || arg;
}


// https://www.codewars.com/kata/duplicate-arguments
function solution() {
  for (let i = 0; i < arguments.length; i++) {
    for (let k = i + 1; k < arguments.length; k++) {
      if (arguments[i] === arguments[k]) {
        return true;
      }
    }
  }
  return false;
}
