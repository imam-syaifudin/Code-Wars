
function feast(beast, dish) {
    const beastSplit = beast.split("");
    const dishSplit = dish.split("");
    return beastSplit[0] === dishSplit[0] && beastSplit[beastSplit.length - 1] === dishSplit[dishSplit.length - 1];
}

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))