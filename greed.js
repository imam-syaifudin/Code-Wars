const score = (dice) => {
  const map = {
    "1-3": 1000,
    "6-3": 600,
    "5-3": 500,
    "4-3": 400,
    "3-3": 300,
    "2-3": 200,
    "1-1": 100,
    "5-1": 50,
  };

  const grouping = Array.from(new Set(dice));
  const count = (element, array) => array.filter((val) => val === element).length;
  const result = {};
  const countingMixed = {};
  let   score = 0;

  grouping.forEach((val) => { result[val] = count(val, dice); });

  for (const property in result) {

    const current = result[property];
    let countTemp = count(parseInt(property), dice)

    for (let i = 1; i <= Math.ceil(current / 3); i++) {
        countingMixed[`${property}-${i}`] = i === Math.ceil(current / 3) ? countTemp : 3;
        countTemp -= 3;
    }

  }

  for( const property in countingMixed ){
    const current = countingMixed[property]
    const getKey = `${property[0]}-${current}`;
    if ( typeof map[getKey] !== 'undefined') score += map[getKey];
    else if( getKey[0] === "1" && getKey[2] === "2" ) score += 200
    else if( getKey[0] === "5" && getKey[2] === "2" ) score += 100
  }

  return score;
};

// console.log(score([2, 3, 4, 6, 2])) //0
// console.log(score([4, 4, 4, 3, 3])); //400
// console.log(score([2, 4, 4, 5, 4])); //450
// console.log(score([3, 3, 3, 3, 3])); // 300
// console.log(score([1, 1, 1, 1, 3])); // 1100
// console.log(score([1, 5, 1, 3, 4])); // 250

