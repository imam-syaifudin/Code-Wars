const country =  [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Åland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
];

const mapping = country.map(val => { 
    return {
        name: val.name,
        code: val.code,
        value: `${val.code} - ${val.name}`
    }
})

console.log(mapping);