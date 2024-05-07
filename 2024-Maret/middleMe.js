function middleMe(N, X, Y){
    
    if( N % 2 !== 0 ) return X;

    let result  = Y.repeat(N).split("");
    result[N / 2] = X;
    result.push(Y)

    return result.join("");
}

console.log(middleMe(18, 'z', '#')) //'#########z#########';
console.log(middleMe(19, 'z', '#')) //'z';