// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  let splitStr = string.split("");
  let res = "";
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i + 1] === undefined) {
      res += splitStr[i];
    } else if (splitStr[i] !== " " && splitStr[i + 1] !== " ") {
      res += splitStr[i] + separator;
    } else {
      res += splitStr[i];
    }
  }
  return res;
}


// https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  if (str.includes(c)) {
    let frstIn = str.indexOf(c);
    let lastIn = str.lastIndexOf(c);
    return lastIn - frstIn;
  } else {
    return -1;
  }
}


// https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  let size = arr[0].length;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= size) {
      size = arr[i].length;
    }
  }
  for (let v = 0; v < arr.length; v++) {
    res.push(arr[v].slice(0, size));
  }
  return res;
}
