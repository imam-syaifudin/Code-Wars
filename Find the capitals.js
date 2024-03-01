function capitals(word) {
    const uppercase = "abcdefghijklmnopqrstuvwxyz".split("").map(val => val.toUpperCase());
    return word.split("").map(val => uppercase.includes(val) ? word.split("").indexOf(val) : false ).filter(val => val !== false)
};

console.log(capitals('CodEWaRs'));