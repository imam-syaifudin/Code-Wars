const arrayMove = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return parseInt(arr.join(""));
}

const smallestDefault = (n) => {

    const split = n.split("");
    const minIndex = Math.min(...n);
    const getIndex = split.indexOf(minIndex.toString());
    const moveTo  = 0;

    return [
        arrayMove(split, getIndex, moveTo),
        getIndex,
        moveTo
    ];

}

const smallest = (n) => {

    return smallestDefault(n.toString());
    
}


console.log(smallest(261235)); // [126235, 2, 0]