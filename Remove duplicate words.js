function removeDuplicateWords(s) {
    const getWords = {};
    s.split(" ").map(val => getWords[val] = val )
    return Object.keys(getWords).join(" ");
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
  