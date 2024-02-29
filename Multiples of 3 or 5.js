function solution(number) {
    return number < 0
        ? 0
        : Array.from({ length: number }, (_, i) => i)
            .filter(num => num % 3 === 0 || num % 5 === 0)
            .reduce((sum, num) => sum + num, 0);
}


console.log(solution(10));

