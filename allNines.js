function allNines(x){

    if( x % BigInt(2) === 0 ) return -1;

    i = BigInt(0);
    let result = 0;
    while( true ){
        let resultCount = x * i;
        if( resultCount.toString().split("").every(val => val === "9") ) {
            result = i
            break;
        };
        i++;
    }

    return result;

}

console.log(allNines(31n));
// console.log(allNines(12));
// console.log(allNines(13));