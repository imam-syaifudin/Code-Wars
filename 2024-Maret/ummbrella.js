function minUmbrellas(weather) {

    const umbrellaTake = (val) => val === "rainy" || val === "thunderstorms" ? true : false; 
    
    const format = []
    let   umbrellaNeed = 0;
    let   umbrellaInCompany = false;

    weather.forEach((val, i) => i % 2 === 0 ? format.push([val]) : format[format.length - 1].push(val) );

    if(weather.length === 1) umbrellaTake(weather[0]) ? umbrellaNeed++ : '';

    format.forEach(val => {
        val.forEach(val2 => {

        })
    })

    return umbrellaNeed;

}


// console.log(minUmbrellas(["rainy"]))
// console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]))
// console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]))
console.log(minUmbrellas(["clear", "rainy", "sunny", "rainy", "clear", "rainy", "rainy", "thunderstorms", "sunny", "rainy"]))

hari pertama pagi dia membawa 1 karena sore hujan = umbrella + 1
hari kedua pagi dia tidak membawa payung karena besok pagi tidak hujan = umbrela not + 1, dan umbrela in company == true


