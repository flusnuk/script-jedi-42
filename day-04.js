// https://www.codewars.com/kata/57216d4bcdd71175d6000560 

function padIt(str, n) {
  let i = 0;

  while (i <= n - 1) {
    if (i % 2 == 0) {
      str = "*" + str;
    } else {
      str += "*";
    }
    i++;
  }
  return str;
}


// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr){
  var odd=[],even=[];
   for(let num of arr){
     if(num % 2 == 0){
       even.push(num);
     }
     else{
       odd.push(num);
     }
   }
  return [odd,even];
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length === 3) {
      break;
    }
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      continue;
    }
  }
  return bag;
}

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000

function giveMeFive(obj) {
  let res = [];
  for (let key in obj) {
    if (key.length === 5) {
      res.push(key);
    }
    if (obj[key].length === 5) {
      res.push(obj[key]);
    }
  }
  return res;
}
