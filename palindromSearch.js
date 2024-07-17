function solve(s) {

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const reverse = (str) => str.split("").reverse().join("");
  const result  = [];

  const getWords = (str) => {

    const phase  = ["next", "prev"];
    const result = [];
    const split  = str.split("");

    for (let i = 0; i < split.length; i++) {

      const randPhase  = phase[Math.floor(Math.random() * phase.length)];
      const currentVal = split[i].toLowerCase();

      const getLetters = (type) => type === "prev" 
                ? word = letters[letters.indexOf(currentVal) - 1] 
                : word = letters[letters.indexOf(currentVal) + 1]  

      if( randPhase === "next" ) currentVal === "z" ? getLetters('prev') : getLetters('next')
      if( randPhase === "prev" ) currentVal === "a" ? getLetters('next') : getLetters('prev')

      result.push(word);

    }

    return result.join("");
  };

  while( result.length !== 4 ){

    const word = getWords(s)
    if( !result.includes(word) ){
        result.push(word);
    }
    
  }

  let i = 0;
  while( i < result.length ){
    const curr = result[i];
    if( curr === reverse(curr) ) return true
    i++
  }
  return false;

}

console.log(solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm")) 
