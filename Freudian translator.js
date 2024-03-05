function toFreud(string){
    return string.length == 0 ? "" : string.split(" ").map(val => "sex").join(" ");
}

console.log(toFreud(""));
console.log(toFreud("test"));
console.log(toFreud("This is a test"));
console.log(toFreud("This is a longer test"));
console.log(toFreud("You're becoming a true freudian expert"));