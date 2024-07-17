function wordSearch(query, seq) {
  
    const result = [];

    seq.forEach(val => {
        if( val.toLowerCase().search(query.toLowerCase()) >= 0 ){
            result.push(val);
        }
    })

    return result.length === 0 ? ["Empty"] : result;
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])) // Empty
