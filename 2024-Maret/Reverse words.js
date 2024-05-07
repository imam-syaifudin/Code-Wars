function reverseWords(str) {
  
    return str.split(" ").map(val => val.split("").reverse().join("")).join(" ")
}