const gridPosition = (name, position) => {

    if( position === 1 ) return `${name} starts from pole position`

    const grid = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [10,11,12],
        [13,14,15],
        [16,17,18],
        [19,20,21],
    ];

    
    const positionMapping = {
        0: "top",
        1: "middle",
        2: "bottom",
    }

    const statusMapping = {
        0: "st",
        1: "nd",
        2: "rd",
        other: "th"
    }

    const findGridPosition  = grid.find(val => val.find(value => value === position))
    const getRow            = grid.indexOf(findGridPosition) + 1;
    const getPosition       = findGridPosition.indexOf(findGridPosition.find(val => val === position))
    const getStatusPosition = typeof statusMapping[getRow - 1] === 'undefined' ? statusMapping['other'] : statusMapping[getRow - 1];

    if( position === 2 || position === 3 ){
        return `${name} starts from the ${positionMapping[getPosition]} of the front row`
    } else {
        return `${name} starts from the ${positionMapping[getPosition]} of the ${getRow}${getStatusPosition} row`;
    }

}

let name = "Kontol"

console.log(gridPosition(name, 11));
console.log(gridPosition(name, 13));
console.log(gridPosition(name, 9));
