function stray(numbers) {

    const list = {};
    numbers.forEach(val => {
        if (!list[val]) {
            list[val] = [];
            list[val].push(val);
        }
        else list[val].push(val)
    });

    for( let i = 0; i < numbers.length; i++ ) if( Object.values(list[numbers[i]]).length === 1 ) return numbers[i]
}

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));