function bearDollars(arr) {

    let result = 0;

    const mappingHour = {
        'close friend': 25,
        'friend': 50, 
        'acquaintance': 100, 
        'Other': 125
    }

    arr.forEach(val => {

        let valLower = val[1].toLowerCase()
        let getHour  = "";
        
        if ( typeof mappingHour[valLower] === 'undefined' || typeof mappingHour[valLower] === 'function' ){
            getHour = mappingHour['Other']
        } else getHour = mappingHour[valLower];

        console.log(getHour, val, typeof getHour.toString());
        result += getHour * val[0];
    })

    return result

}

console.log(bearDollars([
    [ 2, 'Yahoo' ],
    [ 50, 'Close friend' ],
    [ 1, 'Miniworkers' ],
    [ 4, 'Online Platform' ],
    [ 6, 'acquaintance' ],
    [ 1, 'friend' ],
    [ 8, 'Contact Form' ],
    [ 3, 'acquaintance' ],
    [ 4, 'close Friend' ],
    [ 20, 'Big Job' ],
    [ 7, 'main mail' ],
    [ 3, 'friend' ],
    [ 12, 'acquaintance' ],
    [ 24, 'Big Job #2' ],
    [ 1, 'constructor' ]
]))

