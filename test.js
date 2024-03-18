const nama = "Muhammad imam syaifudin";
const getInitial = name => name.split(" ").map(val => val[0].toUpperCase()).join("");

console.log(getInitial("Mochammad"));