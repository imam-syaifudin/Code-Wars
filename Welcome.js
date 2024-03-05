const database = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkoms",
    dutch: "Welkom",
    estonian: "Tere tulemas",
    finnish: "Tervetulo",
    flemish: "Welgekome",
    french: "Bienvenu",
    german: "Willkomme",
    irish: "Failt",
    italian: "Benvenut",
    latvian: "Gaidit",
    lithuanian: "Laukiam,a",
    polish: "Witam",
    spanish: "Bienvenid",
    swedish: "Valkomme",
    welsh: "Croes",
};

const greet = languange => database[languange] === undefined  ? 'Welcome' : database[languange];

console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_INVALID'));