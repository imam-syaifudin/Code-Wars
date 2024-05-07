function sum (numbers) {

    return numbers.length == 0 ? 0 : numbers.reduce((prev,curr) => prev + curr);
};

console.log(sum([1, 5.2, 4, 0, -1]));