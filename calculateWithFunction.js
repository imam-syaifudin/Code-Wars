const zero = (operation) => operation ? Math.floor(eval(`${0}${operation}`)) : 0;
const one = (operation) => operation ? Math.floor(eval(`${1}${operation}`)) : 1;
const two = (operation) => operation ? Math.floor(eval(`${2}${operation}`)) : 2;
const three = (operation) => operation ? Math.floor(eval(`${3}${operation}`)) : 3;
const four = (operation) => operation ? Math.floor(eval(`${4}${operation}`)) : 4;
const five = (operation) => operation ? Math.floor(eval(`${5}${operation}`)) : 5;
const six = (operation) => operation ? Math.floor(eval(`${6}${operation}`)) : 6;
const seven = (operation) => operation ? Math.floor(eval(`${7}${operation}`)) : 7;
const eight = (operation) => operation ? Math.floor(eval(`${8}${operation}`)) : 8;
const nine = (operation) => operation ? Math.floor(eval(`${9}${operation}`)) : 9;

const hasParameter = (fn) => fn.length > 0;

const plus = (num) => `+${num}`;
const minus = (num) => `-${num}`;
const times = (num) => `*${num}`;
const dividedBy = (num) => `/${num}`;
