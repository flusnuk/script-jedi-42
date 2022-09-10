// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}


// https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  let powN = Math.pow(n, 2).toString();
  let res = powN.substring(powN.length - n.toString().length);
  if (res === n.toString()) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
