// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

function buildFun(n) {
  let res = [];

  for (var i = 0; i < n; i++) {
    let b = i;
    res.push(function () {
      return b;
    });
  }
  return res;
}
// https://www.codewars.com/kata/shifty-closures/train/javascript

let name;
let greet_abe = function() {
  name = 'Abe';
  return "Hello, " + name + '!';
};

let greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};
