function lottery(str){
    const filter = str.split("").filter(val => !isNaN(val)).map(val => Number(val))
    return filter.length === 0 ? "One more run!" : Array.from(new Set(filter)).join("");
}

console.log(lottery("0wQ8Hy0y5m5oshQPeRCkG"));
console.log(lottery("ffaQtaRFKeGIIBIcSJtg"));