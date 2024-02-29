function oddOrEven(array) {
    return array.length == 0 || array.reduce((prev, next) => prev + next) % 2 == 0 ? "even" : "odd"; 
}

console.log(oddOrEven([0, 1, 5]));