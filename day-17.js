// https://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  let count = f => scores.filter(v => f(v)).length;
  return {
    S: count(v => v == 100),
    A: count(v => v < 100 && v >= 90),
    B: count(v => v < 90 && v >= 80),
    C: count(v => v < 80 && v >= 60),
    D: count(v => v < 60 && v >= 0),
    X: count(v => v == -1)
  }
}

// https://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr) {
    let a, b;
    let result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
}

// https://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = arr => [].concat(...arr).sort((a,b) => b-a).join('>')
