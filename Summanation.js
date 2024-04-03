function summation(number){
    let result = [];
    for( let i = 1; i <= number; i++ ) result.push(i)
    return result.reduce((prev,curr) => prev + curr)
}

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));