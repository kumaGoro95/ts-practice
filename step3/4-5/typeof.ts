console.log(typeof 100);

const arr = [1, 2, 3];
console.log(typeof arr);

type Numarr = typeof arr;

const val: Numarr = [4, 5, 6];
// const val2: Numarr = [4, 5, '6']; 