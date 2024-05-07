function doubleChar(str) {
    
    const split = str.split("");
    const result = [];
    for( let i = 0; i < split.length; i++ ){
        result.push(split[i]);
        result.push(split[i]);
    }

    return result.join("");
}

console.log(doubleChar("abcd"));
// console.log(doubleChar("abcd "));
  