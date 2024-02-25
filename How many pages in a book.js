function amountOfPages(summary){

    let list = "";
    let i = 1;
    let lastNumber = 0;
    while( list.length !== summary ){
        list += `${i}`;
        lastNumber = i;
        i++
    }

    return lastNumber;

}

console.log(amountOfPages(5))
console.log(amountOfPages(25))