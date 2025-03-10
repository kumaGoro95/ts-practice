function double(n) {
    return n * 2;
}

const dbl = function(n) {
    return n * 2;
};

const sum = new Function('a', 'b', 'return a + b');

const add = function(a, b) {
    return a + b;
}

const foo = {
    bar: 'bar',
    baz() {
        console.log('baz');
    },
};

foo.baz();

const raise = (n, m = 2) => n ** m;

console.log(raise(2, 3));
console.log(raise(3));

const showNames = (a, b, ...rest) => {
    console.log(a, b, rest);
};

showNames('a', 'b', 'c', 'd', 'e');

const sum2 = (i, ...[j, k, l]) => i + j + k + l;

console.log(sum2(1, 2, 3, 4));