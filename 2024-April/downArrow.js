function getADownArrowOf(n) {

  const getNumberFormat = () => {
    let number = "1234567890".split("").map(val => parseInt(val));
    let result = [];
    let resultReversed = [];
    
    for( let i = 0; i < n; i++ ){
      typeof number[i] === 'undefined' ? result.push(number[i % 10]) : result.push(number[i]);
    }

    result.forEach((val,index) => { if( index + 1 !== result.length ) resultReversed.push(val) ) }
    
    return result.concat(resultReversed.reverse());

  }

  return getNumberFormat(n)
}

console.log(getADownArrowOf(1));
console.log(getADownArrowOf(11));
