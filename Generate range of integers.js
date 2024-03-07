function generateRange(start, stop, step) {
    const result = [];
    for (let i = start; i <= stop; i += step) result.push(i)
    return result;
}