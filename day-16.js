// https://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr){
  let result = [];
  for(var i=0;i<arr.length;i+=3) {
    result.push(arr[i] + arr[i+1] + arr[i+2]);
  }
  return result
}

// https://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr){
  let numberOf = {};
  arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr){
  return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}
