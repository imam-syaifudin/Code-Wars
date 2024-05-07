const openOrSenior = (data) => data.map(val => val[0] >= 55 && val[1] > 7 ? 'Senior' : 'Open')

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));