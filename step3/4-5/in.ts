const obj = {a: 1, b: 2, c: 3};
console.log('a' in obj);

for (const key in obj) {
    console.log(key);
}

// in 演算子は型コンテキストでは、列挙された型の中から各要素の型の値を抜き出してマップ型（Mapped Type）を作る
type Fig = 'one' | 'two' | 'three';
type FigMap = {
    [key in Fig]?: number;
};

const FigMap: FigMap = {
    one: 1,
    two: 2,
    three: 3
};
// FigMap.four = 4;