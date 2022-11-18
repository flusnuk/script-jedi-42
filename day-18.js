// https://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr){
  let prod = 1;
  arr.reduce((prev, curr)=>{
    let s1 = prev.toString();
    let s2 = curr.toString();
    prod  *= parseInt(s1[s1.length-1]) + parseInt(s2[0]);
    return curr 
  });
  return prod;
}

// https://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr){
  if ( !Array.isArray( arr ) ) return 'It\'s a fake array'
  if ( arr.indexOf( 5 ) != -1 && arr.indexOf( 13 ) != -1 ) return 'It\'s a black array'
  return 'It\'s a white array'
}

// https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript
function rndCode(){
    let p1 = 'ABCDEFGHIJKLM';
    let p2 = '0123456789';
    let p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');
  
}
