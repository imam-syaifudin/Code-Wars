const areaOrPerimeter = function (l, w) {
    return l === w ? l * l : 2 * ( l + w );
};

console.log(areaOrPerimeter(3,  3));
console.log(areaOrPerimeter(6, 10));