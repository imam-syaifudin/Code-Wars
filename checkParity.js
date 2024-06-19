function checkParity(parity, bin) {

    const oneBit = bin.split("").filter(val => val === "1");

    if ( parity === "even" && oneBit.length % 2 === 0 ) return 0;
    else if ( parity === "even" && oneBit.length % 2 !== 0 ) return 1;

    if ( parity === "odd" && oneBit.length % 2 !== 0 ) return 0;
    else if ( parity === "odd" && oneBit.length % 2 === 0 ) return 1;
    

}

console.log(checkParity("even", "101010"));
console.log(checkParity("odd", "101010"));
console.log(checkParity("even", "101011"));
console.log(checkParity("odd", "101011"));
