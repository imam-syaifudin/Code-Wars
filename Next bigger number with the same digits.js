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
    return parseInt(result);
  }

  let check = doLoop();
  while( check < n ){
    check = doLoop();
  };

  return check;

}

console.log(nextBigger(12));