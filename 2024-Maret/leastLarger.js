function leastLarger(arr, idx) {
    let target = arr[idx];
    let minLargerIdx = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target && (minLargerIdx === -1 || arr[i] < arr[minLargerIdx])) {
            minLargerIdx = i;
        }
    }

    return minLargerIdx;
}

// Contoh penggunaan:
console.log(leastLarger([4, 1, 3, 5, 6], 0));  // Output: 3
console.log(leastLarger([4, 1, 3, 5, 6], 4));  // Output: -1
