function amountOfPages(summary){

    let list = "";
    let i = 0;
    while( i <= 17 ){
        list += `${i}`;
        i++
        list.length;
    }

    return list;

}

// console.log(amountOfPages(5))
console.log(amountOfPages(25))