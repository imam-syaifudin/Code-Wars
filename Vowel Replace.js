function replace(s) {

    const rules = "aeiouAEIOU".split("");
    
    return s.split("").map(val => rules.includes(val) ? "!" : val).join("");

}

console.log(replace("Hi!"))
