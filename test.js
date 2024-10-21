function remove(string) {  

  let str = string.split("").reverse()

  for( let i = 0; i < str.length; i++ ){
    
    if( str[i] !== "!" ) break
    str[i] = ""
  }

  return str.reverse().join("");

}

console.log(remove('Hi!!!'))