const user = {
    id: 3,
    name: 'Bobby',
    username: 'bobby',
    email: 'bobby@mable.town'
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

Object.keys(user).map((k) => {
    console.log(k, user[k]);
});
Object.entries(user).map(([k, v]) => {
    console.log(k, v);
});