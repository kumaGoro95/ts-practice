// ここでのextendsは、関数 override() の第 2 引数 obj2 の型を定義している型引数 U が第 1 引数の 型 obj1 の型 T と同じか拡張したものでなければならないことを示唆する
const overMerge = <T, U extends T>(obj1: T, obj2: U): T & U => ({
    ...obj1,
    ...obj2
});

overMerge({a: 1}, {a: 4, b: 8});
// 最後の行は { n: number; m: number } が { a: number } の拡張じゃないからエラーになる
// overMerge({a: 1}, {n: 4, m: 8});