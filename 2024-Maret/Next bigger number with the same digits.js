function nextBigger(n) {

  const getRandom = (list) => list[Math.floor((Math.random() * list.length))];
  let split = n.toString().split("");

  function doLoop(){
    let result = '';
    while (split.length !== 0) {
      let rand = getRandom(split);
      result += rand;
      split.splice(split.indexOf(rand), 1);
    }
    split = n.toString().split("");
    return parseInt(result);
  }

  let check = doLoop();
  for( let i = 0; i < 3; i-- ){
    check = doLoop();
    if( check > n ) break;
  }

  return check;

}

console.log(nextBigger(2017));