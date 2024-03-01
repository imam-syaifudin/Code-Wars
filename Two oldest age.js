function twoOldestAges(ages) {
    const list = [];
    for( let i = 0; i < 2; i++ ) list.push(parseInt(ages.splice(ages.indexOf(Math.max(...ages)), 1).join("")))
    return list.reverse();
}

console.log(twoOldestAges([1, 3, 10, 0]));
