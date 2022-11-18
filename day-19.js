// https://www.codewars.com/kata/5735e39313c205fe39001173
const countAnimals = (animals,count) => count.map(x => animals.split(x).length - 1);

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str,word){
  let reg=new RegExp("^"+word.replace(/\B.\B/g,".")+"$"); 
  return str.split(/ /).filter(x=>reg.test(x)).join(" ");
}
