function divisibleByLast(n) {
  const split = n.toString().split("").map(val => parseInt(val)); 
  const mapping = split.map((val, index) => index === 0 ? false : ( val % split[index - 1] === 0 ? true : false )) 
  return mapping;
}

console.log(divisibleByLast(73312));
// console.log(divisibleByLast(2026));
