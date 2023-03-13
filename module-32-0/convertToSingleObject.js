const Persons = [
    { id: 'ID01', name: 'abul vai', age: 23 },
    { id: 'ID02', name: 'abul vai', age: 43 },
    { id: 'ID03', name: 'abul vai', age: 53 },
    { id: 'ID04', name: 'abul vai', age: 63 },
    { id: 'ID05', name: 'abul vai', age: 73 },
    { id: 'ID06', name: 'abul vai', age: 83 },
];

const info = {};
// info['name'] = 'mehedy';
// info['age'] = 25
// console.log(info)


Persons.map( p => {
    const id = p.id;
    const value = p.name;

    info[id] = value;
})

console.log(info)