function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetCapitalz = alphabet.map(val => val.toUpperCase());
    return alphabet.indexOf('a');
}

console.log(alphabetPosition('oke'));