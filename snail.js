const snail = (arr) => {
  if (arr[0].length === 0) return [];
  if (arr.length * arr.length <= 1) return arr.map((val) => parseInt(val));

  const getOutsideArr = (arr) => {
    const duplicateArr = JSON.parse(JSON.stringify(arr));

    if (duplicateArr[0].length === 1)
      return {
        duplicateArr: [],
        result: duplicateArr[0],
      };

    const arrLength = arr.length;
    let result = [];

    let startIndexOutside = 0;
    let endIndexOutside = arr[0].length - 1;
    let temp = [];

    for (let indexMain = 0; indexMain < arr.length; indexMain++) {
      
      let val = arr[indexMain];
      
      for (index2 = 0; index2 < arr.length; index2++) {
        
        let val2 = arr[indexMain][index2];

        if (indexMain === 0) {
          result.push(val2);
          duplicateArr[indexMain].splice(0, 1);
        }
        
        if (indexMain === arr.length - 1) {
          temp.push(val2);
          duplicateArr[indexMain].splice(0, 1);
        }

        if (
          index2 === endIndexOutside && indexMain !== 0 &&
          index2 === endIndexOutside && indexMain !== arr[0].length - 1
        ) {
          result.push(val2);
          duplicateArr[indexMain].splice(arrLength - 2, 1);
        } 

        if (
          index2 === startIndexOutside && indexMain !== 0 &&
          index2 === startIndexOutside && indexMain !== arr.length - 1
        ) {
          temp.push(val2);
          duplicateArr[indexMain].splice(0, 1);
        }
      }
    }

    result = result.concat(temp.reverse());
    result = result.join(",");

    duplicateArr.splice(0, 1);
    duplicateArr.splice(duplicateArr.length - 1, 1);

    console.log(duplicateArr, result)

    return { duplicateArr, result };
  };

  let nums = [];

  while (arr.length !== 0) {
    const { duplicateArr, result } = getOutsideArr(arr);
    arr = duplicateArr;
    nums.push(result);
  }

  return nums
          .join(",")
          .split(",")
          .map((val) => parseInt(val));
};

