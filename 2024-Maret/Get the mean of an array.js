// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
    return Math.floor(marks.reduce((curr, next) => curr + next) / marks.length);
}

console.log(getAverage([1,1,1,1,1,1,1,2]));