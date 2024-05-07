function sumDigits(number) {
    return number.toString().split("")
                 .filter(val => val !== '-')
                 .map(val => parseInt(val))
                 .reduce((prev,next) => prev + next);
}

console.log(sumDigits(-35));
