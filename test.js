const data = [
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

function toCsvText(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    if (i + 1 !== array.length) array[i].push("\n");
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if ( array[i][j] !== "\n" && array[i][j + 1] !== "\n" ) result += `${array[i][j]},`;
      else if( array[i][j + 1] === "\n" ) result += `${array[i][j]}`
      else result += "\\n"
    }
  }

  result = result.split("");
  result.pop();

  return result.join("");
}

console.log(toCsvText(data));
console.log('0,1,2,3,45\\n10,11,12,13,14\\n20,21,22,23,24\\n30,31,32,33,34')

