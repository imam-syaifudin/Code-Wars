const sendMessage = (message) => {
  const strToArray = (string, separator = "") => string.split(separator);
  let letterCaseMode = false;

  const toggles = {
    "1" : strToArray(".,?!"),
    "2" : strToArray("abc"),
    "3" : strToArray("def"),
    "4" : strToArray("ghi"),
    "5" : strToArray("jkl"),
    "6" : strToArray("mno"),
    "7" : strToArray("pqrs"),
    "8" : strToArray("tuv"),
    "9" : strToArray("wxyz"),
    "*" :  strToArray("'-+="),
    "0" : "space",
    "#" : "case",
  };

  const submitToggle = (num, time, next = null) => {
    if ( num === "#" ) return '#';
    if ( num === " " || num === "-") return "";
    if ( num === "0" ) return " ";
    else {
        if( next === "-" ) return num === "-" ? "" : num;
        return typeof toggles[num] !== 'undefined' ? toggles[num][time - 1] : num;
    }
  };

  const groupingMessage = () => {
    const grouping = {};

    for (let i = 0; i < message.length; i++) {
      const getNext    = message[i + 1];
      const getPrev    = message[i - 1];
      const getCurrent = message[i];

      let count = 0;

      Object.keys(grouping).forEach((val) => {
        let searchIndex = getCurrent === "*" ? val.search(/[*]/) : val.search(getCurrent);
        if ( searchIndex >= 0) count++;
      });

      if (typeof grouping[`${getCurrent}:${i}`] === "undefined") {
        if (typeof getPrev !== "undefined") {
          if ( getPrev === getCurrent) grouping[`${getCurrent}:${count - 1}`]++;
          else grouping[`${getCurrent}:${count}`] = 1;
        } else grouping[`${getCurrent}:${count}`] = 1;
      }
    }

    return grouping;
  };

  const group = groupingMessage();
  let   result = "";
  let   index = 0;


  for( const key of Object.keys(group) ){
    
    const formatKey = key.split(":")[0];
    const value     = group[key];

    if( typeof Object.keys(group)[index + 1] !== 'undefined' ){
        const formatNextKey = Object.keys(group)[index + 1].split(":")[0];
        result += submitToggle(formatKey, value, formatNextKey);
    } else result += submitToggle(formatKey, value);
    
    index++;
  }

  return result;
  
};

// console.log(sendMessage("#2**#9999"));
// console.log(sendMessage("4433999"));
// console.log(sendMessage("666 6633089666084477733 33"));
// console.log(sendMessage("1-9-8-4-"));
console.log(sendMessage("#3#33 3330#222#666 6601-1111"));
// console.log(sendMessage("#44#33555 5556660#9#66677755531111"));
// console.log(sendMessage("#22#444 4084426655777703336667770222443322255444664066688 806999055282"));
