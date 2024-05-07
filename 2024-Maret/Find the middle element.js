function gimme(triplet) {
    const copy = [...triplet];
    copy.splice(copy.indexOf(Math.min(...copy)), 1);
    copy.splice(copy.indexOf(Math.max(...copy)), 1);
    return triplet.indexOf(copy[0]);
}

console.log(gimme([5, 10, 14]));