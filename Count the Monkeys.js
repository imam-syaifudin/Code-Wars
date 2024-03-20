function monkeyCount(n) {
    const listNumber = [];
    for( let i = 1; i <= n; i++) listNumber.push(i);
    return listNumber;
}

console.log(monkeyCount(20));