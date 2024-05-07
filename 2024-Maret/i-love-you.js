function howMuchILoveYou(nbPetals) {
  const rules = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  return rules[(nbPetals - 1) % 6];
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
