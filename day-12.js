// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str){
  let array = []
  str.split('').forEach(char => {array.push(char.charCodeAt(0).toString(2).padStart(8, '0')) })
  return array;
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059

const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6
