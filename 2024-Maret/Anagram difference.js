function anagramDifference(w1, w2) {

    let w1split = w1.split("");
    let w2split = w2.split("");
    let count1 = 0;
    let count2 = 0;

    w1.split("").forEach(val => {
        if (w2split.includes(val)) {
            count1++;
        }
    })

    w2.split("").forEach(val => {
        if (w1split.includes(val)) {
            count2++;
        }
    })

    return count1 + count2;

}

console.log(anagramDifference("a", "aab"));
