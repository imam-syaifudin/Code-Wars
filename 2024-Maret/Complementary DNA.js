function dnaStrand(dna) {
    const basePairs = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };
    return dna.split("").map(val => basePairs[val]).join("");
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));