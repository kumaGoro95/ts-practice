const foo: unknown = '1, 2, 3, 4';

// 型ガード(Type Guard)
if (typeof foo === 'string') {
    console.log(foo.split(','));
}

// console.log(foo.split(','));