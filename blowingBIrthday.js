function blowCandles(str) {

  let split = str.split("");
  let move = 0;

  const getNumber = (start = false) => {

    let result = [];
    let index  = [];
    let i = 0;

    if( !start ){
      let setIndex = 0;
      while( split[setIndex] === "0" ){
        setIndex++;
        i = setIndex;
      }
    } else {
      i = split.filter(val => val === "0").length
    }

    while (result.length !== 3) {
        result.push(split[i]);
        index.push(i);
        i++;
    }

    return { 
      number: result.filter((val) => typeof val !== "undefined"),
      indexList:  index,
    }
    
  };

  while (split.some((val) => val !== "0")) {
    
    let { number, indexList } = getNumber();
    let i = 0;

    const doLoop = () => {

      while (number.filter((val) => val === "0").length !== number.length) {

        
        console.log('group number before',number)
        
        if( typeof number[i + 1] !== 'undefined' && number[i + 1] !== "0") { 
          number[i + 1] = parseInt(number[i + 1]) - 1;
          number[i + 1] = number[i + 1].toString();
          split[indexList[i + 1]] = number[i + 1]; 
        }
        
        if( typeof number[i + 2] !== 'undefined' && number[i + 2] !== "0") { 
          number[i + 2] = parseInt(number[i + 2]) - 1;
          number[i + 2] = number[i + 2].toString();
          split[indexList[i + 2]] = number[i + 2]; 
        }
        
        if ( number[i] !== "0") {
          number[i] = parseInt(number[i]) - 1;
          number[i] = number[i].toString();
          split[indexList[i]] = number[i];
        }
        
        if( number[i] === "0" ){
          split[indexList[i]] = number[i]; 
          number = getNumber().number;
          indexList = getNumber().indexList;
        }

        if( number.every(val => val === "0") ){
          number = getNumber(true).number;
          indexList = getNumber(true).indexList
        }

        console.log('split after', split)
        console.log('\n')
        move++;

      }

    }

    doLoop();
  }


  return move;
}

// Basic Test
// console.log(blowCandles("1321")) // 3],
// console.log(blowCandles("0323456")) // 9],
// console.log(blowCandles("2113")) // 5],
// console.log(blowCandles("1110")) // 1],
// console.log(blowCandles("121")) // 2]

// Fail Test
console.log(blowCandles("102201")) // 2]
