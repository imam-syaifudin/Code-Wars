function tennisGamePoints(score) {
  const formatScore = {
    "love": 0,
    "15": 1,
    "30": 2,
    "40": 3,
  };
  const split = score.split("-");

  return split.includes('all')
        ? formatScore[split[0]] * 2 
        : formatScore[split[0]] + formatScore[split[1]] 
  
}

console.log(tennisGamePoints("15-40")) // 4;
console.log(tennisGamePoints("30-all")) // 4;
console.log(tennisGamePoints("love-15")) // 1;
console.log(tennisGamePoints("love-30")) // 2;
console.log(tennisGamePoints("love-40")) // 3;
console.log(tennisGamePoints("15-love")) // 1;
console.log(tennisGamePoints("15-30")) // 3;
