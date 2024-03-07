function sumTwoSmallestNumbers(numbers) {
    let list = [];
    for( let i = 0; i < 2; i++ ) list.push(numbers.splice(numbers.indexOf(Math.min(...numbers)),1).join(""))
    return list.reduce((prev,next) => parseInt(prev) + parseInt(next));
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));