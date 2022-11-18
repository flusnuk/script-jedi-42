// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8
let shuffleIt=(arr,...ex)=>{
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
function loopArr(arr, direction, steps) {
  const i = direction == 'left' ? steps : -steps;
  return arr.slice(i).concat(arr.slice(0, i));
}

// https://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr,d,n){
  for (let i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}
