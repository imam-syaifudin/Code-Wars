const twoSum = (arr, target) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = [...arr];
    temp.splice(i, 1);

    for (let j = 0; j < temp.length; j++) {
      if (arr[i] + temp[j] === target) {
        result.push(j);
      }
    }

     if( result.length === 2 ) break;
  }

  return result;
};

const arr = [
  -815, -347, -649, 976, 281, 507, -468, -469, 211, 454, -764, 477, 476, -168,
  777, -293, 323, -388, 793, -159, 585, 576, 659, 249, -420, -305, -475, 494,
  718, 660, 448, -751, -804, -672, -742, -981, -837, -402, 418, 613, -782, -105,
];

console.log(twoSum(arr, 26));
