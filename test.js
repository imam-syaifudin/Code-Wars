const arr = [1,2,3,4,5,6];

const max = (arr) => arr.reduce((maxVal, currentValue) => currentValue > maxVal ? currentValue : maxVal, arr[0]); 

console.log(max(arr));