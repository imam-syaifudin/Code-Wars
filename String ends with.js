function solution(str, ending){
    return ending.length === 0 ? false : str.split("").slice(-ending.length).join("") === ending;
}

console.log(solution('abc', ''))