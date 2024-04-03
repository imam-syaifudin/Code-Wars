function strCount(str, letter) {

    const split = str.split("");
    let total = 0;

    for( let i = 0; i < split.length; i++ ){
        if( split[i] === letter ) total++;
    }

    return split.length == 0 ? 0 : total;

}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
