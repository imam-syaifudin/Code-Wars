function removeSmallest(numbers) {
    let copy = [...numbers];
    copy.splice(numbers.indexOf(Math.min(...numbers)),1);
    return copy;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));