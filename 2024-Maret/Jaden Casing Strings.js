// String.prototype.toJadenCase = function(){  
//     return this.split(" ").map(val => val[0].toLowerCase()).join(" ")
// }

// const str = "muhammad imam syaifudin";
// console.log(str.toJadenCase());


function toCapital(str){

    const splitString = str.split(" ");
    const getInitial = splitString.map(val => val[0].toUpperCase());

    for( let i = 0; i < splitString.length; i++ ){
         splitString[i][0] = getInitial[i];
    }

    return splitString;

}

console.log(toCapital("muhammad imam"));