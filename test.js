const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
const coba = Array.from(new Set(string.split(" "))).join(" ");

console.log(coba);