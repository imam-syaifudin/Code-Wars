function longestWord(stringOfWords) {

    const splitWord         = stringOfWords.split(" ");
    const getMax            = Math.max(...splitWord.map((val,index) => val.split("").length));
    const longMappingLength = splitWord.map((val,index) => `${val.split("").length}:${index}`);
    const getDoubleIndex    = longMappingLength.filter(val => parseInt(val.split(":").shift()) === getMax)
    const maxValue          = getDoubleIndex.map(val => parseInt(val.split(":")[val.split(":").length - 1]) )

    for( let i = 0; i < getDoubleIndex.length; i++ ){
        const current = getDoubleIndex[i];
        const parse = parseInt(current.split(":")[current.split(":").length - 1])
        if( parse === Math.max(...maxValue) ) return splitWord[parse];
    }
    

}

