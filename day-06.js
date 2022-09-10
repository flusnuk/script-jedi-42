// https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound) {
  let res;
  for (let i = divisor; i <= bound; i++) {
    if (i % divisor == 0) {
      res = i;
    }
  }
  return res;
}

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons) {
  return  bullets >= dragons * 2;
}

// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript

function unusualFive() {
  let res = ['one', 'two', 'three', 'four', 'five'];
  return res.length;
}
