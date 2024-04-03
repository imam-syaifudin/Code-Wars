function flickSwitch(arr) {
  let status = true;
  let result = [];

  for( let i = 0; i < arr.length; i++ ){
    if( arr[i] === 'flick' ) status = !status
    result.push(status);
  }
  
  return result;
}

const arr1 = ['codewars', 'flick', 'code', 'wars'];
console.log(flickSwitch(arr1));