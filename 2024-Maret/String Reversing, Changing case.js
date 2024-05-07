function reverseAndMirror(s1,s2) {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("").map(val => val.toUpperCase());
    const format   = (arr) => arr.split("").map(val => alphabet.includes(val) ? val.toLowerCase() : val.toUpperCase() )
    const s1Format = `${format(s1).reverse().join("")}${format(s1).join("")}`;
    const s2Format = `${format(s2).reverse().join("")}`;

    return `${s2Format}@@@${s1Format}`;
}

console.log(reverseAndMirror("Water","Fish"));