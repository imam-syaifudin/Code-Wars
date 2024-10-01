function compress(music) {
  let result = "";

  const getBetween = (i, getCurrent, getNext) => {
    let result = "";
    let getNextIncr = 0;
    let endNumber = "";

    while (true) {
      let duplicateNext = music[i + 1 + getNextIncr];
      let duplicateNext2 = music[i + 2 + getNextIncr];

      if (duplicateNext + 1 !== duplicateNext2 && getCurrent + 1 === getNext)
        break;
      if (duplicateNext - 1 !== duplicateNext2 && getCurrent - 1 === getNext)
        break;

      endNumber = getCurrent + 1 === getNext ? duplicateNext + 1 : duplicateNext - 1;
      getNextIncr++;
    }

    if (getNextIncr > 0) {
      result += `${getCurrent}-${endNumber},`;
      music.splice(i + 1, 1 + getNextIncr);
    } else result += getCurrent + ",";

    return result;
  };

  const getRepeat = (i, getCurrent, getNext) => {
    let getNextIncr = 0;

    while (true) {
      let duplicateNext = music[i + getNextIncr];
      let duplicateNext2 = music[i + 1 + getNextIncr];

      if (duplicateNext !== duplicateNext2) break;

      getNextIncr++;
    }

    music.splice(i + 1, getNextIncr);
    return `${getCurrent}*${getNextIncr + 1},`;
  };

  for (let i = 0; i < music.length; i++) {
    let getCurrent = music[i];
    let getNext = music[i + 1];
    let getNext2 = music[i + 2];
    let getNext3 = music[i + 3];
    let getPrev = music[i - 1];

    if (getCurrent + 1 === getNext || getCurrent - 1 === getNext) {
      result += getBetween(i, getCurrent, getNext);
    } else if (getCurrent === getNext) {
      result += getRepeat(i, getCurrent, getNext);
    } else if (
        (getNext + getNext === getNext2 || getCurrent + getCurrent === getNext) ||
        (getNext - getNext2 === getNext2 - getNext3 || getCurrent - getCurrent === getNext) 
    ) {

      let acc = 0;

      if( getNext + getNext === getNext2 || 
          getCurrent + getCurrent === getNext 
       ){
          let acc = getNext + getNext === getNext2 ? getNext : getCurrent;
      } else if( getNext - getNext2 === getNext2 - getNext3 || 
                 getCurrent - getCurrent === getNext 
            ){
          let acc = getNext - getNext2;
      }

      console.log('kontol');

      let getNextIncr = 0;
      let endNumber = "";

      while (true) {
        let duplicateNext = music[i + getNextIncr];
        let duplicateNext2 = music[i + 1 + getNextIncr];

        if (duplicateNext + acc !== duplicateNext2) break;

        endNumber = duplicateNext2;
        getNextIncr++;
      }

      music.splice(i + 1, getNextIncr);
      result += `${getCurrent}-${endNumber}/${acc},`;
    } else {
      result += getCurrent + ",";
    }
  }
//   result = result.split("")
//   result.pop();

  return [result, music];
}

console.log(compress([1,10,8,6,7]));
