const original = {a: 1, b: 2, c:3};

const copy = {...original};
console.log(copy);
console.log(copy === original);

const assigned = { ...original, ...{ c: 10, d: 50 }, d: 100 };
console.log(assigned); 
console.log(original);

const party = { name: 'party rabbit', age: 8, address: {town: 'town a'} };
const rolley = JSON.parse(JSON.stringify(party));
rolley.name = 'rolley';
rolley.age = 6;
rolley.address.town = 'town b';

console.log(party);