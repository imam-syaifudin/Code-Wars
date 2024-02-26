function max(arr, accessor) {
    if (typeof accessor === 'function') return Math.max(...arr.map(accessor))
    else return Math.max(...arr)
}