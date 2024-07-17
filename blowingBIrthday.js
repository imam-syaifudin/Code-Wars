const blowCandles = (str) => {
  
  let split = str.split("");
  let move = 0;

  const getNumber = () => {
    let result    = [];
    let indexList = [];
    let i = 0;

    while (split[i] === "0") i++;

    while (result.length !== 3) {
      result.push(split[i]);
      indexList.push(i);
      i++;
    }

    return { number: result.filter((val) => typeof val !== "undefined"), indexList: indexList };
  };

  while (split.some((val) => val !== "0")) {

    let { number, indexList } = getNumber();
    let i = 0;

    const changeSplit = (index) => {
      number[index] = parseInt(number[index]) - 1;
      number[index] = number[index].toString();
      split[indexList[index]] = number[index];
    };

    while (number.some((val) => val !== "0")) {
      
      const nextNumber = number[i + 1];
      const next2Number = number[i + 2];

      if (typeof nextNumber  !== "undefined" && nextNumber  !== "0") changeSplit(i + 1);
      if (typeof next2Number !== "undefined" && next2Number !== "0") changeSplit(i + 2);
      if (number[i] !== "0") changeSplit(i);

      if (number[i] === "0" || number.every((val) => val === "0")) {
        number    = getNumber().number;
        indexList = getNumber().indexList;
      }

      move++;
    }
  }

  return move;
};

// Basic Test
console.log(blowCandles("1321")) // 3],
console.log(blowCandles("0323456")); // 9],
console.log(blowCandles("2113")) // 5],
console.log(blowCandles("1110")) // 1],
console.log(blowCandles("121")) // 2]

// Fail Test
console.log(blowCandles("102201")); // 2
