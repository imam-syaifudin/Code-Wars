function rentalCarCost(d) {
    let total = d * 40;
    if( d >= 7 ) return total - 50;
    else if( d >= 3 ) return total - 20;
    else return total;
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(7));