function updateLight(current) {

    const lightMapping = {
        "green": "yellow",
        "yellow": "red",
        "red": "green",
    };

    return lightMapping[current]

}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));