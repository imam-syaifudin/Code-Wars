function blowCandles(str) {
  let move = 0;
  let split = str.split("");

  while (split.some((val) => val !== "0")) {

    let getThreeFirst = [];
    let getThreeIndex = [];

    let i = 0;

    while (getThreeFirst.length !== 3) {
        
      const next = split[i + 1];
      const prev = split[i - 1];
      const curr = split[i];

      if (curr === "0") {
        i++;
        continue;
      } else {
        getThreeFirst.push(curr);
        getThreeIndex.push(i);
      }
      i++;
    }

    getThreeIndex.forEach((val, index) => {
      if ( typeof getThreeFirst[index] !== "undefined" && getThreeFirst[index] !== "0" ) {
        split[val] = parseInt(getThreeFirst[index]) - 1;
        split[val] = split[val].toString();
      }
    });

    console.log(getThreeFirst)

    getThreeFirst = [];
    getThreeIndex = [];
    // move++;
  }

  return move;
}

console.log(blowCandles("1321"));
console.log(blowCandles("2113"));
