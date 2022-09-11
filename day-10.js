// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  let res = [];
  let arrStr = str.toUpperCase().split(" ");

  for (let word of arrStr) {
    let a = word[word.length - 1].toLowerCase();
    res.push(word.slice(0, -1) + a);
  }
  return res.join(" ");
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a



// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

