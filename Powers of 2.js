function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) result.push(Math.pow(2, i))
    return result;
}

// console.log(powersOfTwo(0))
// console.log(powersOfTwo(1))
console.log(powersOfTwo(4))