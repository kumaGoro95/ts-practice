// 宣言時に特定のデータ型に限定されないよう型を抽象化してコードの再利用性を向上させつつ、
// 静的型付け言語の持つ型安全性を維持するプログラミング手法を『ジェネリックプログラミング(Generic Programming)』と呼ぶ。
// 型引数を用いて表現するデータ構造のことを『ジェネリクス(Generics)』という
interface CustomError<E = Error> {
    type: 'syntax' | 'logic' | 'runtime';
    error: E;
}

const tokenError: CustomError = {
    type: 'syntax',
    error: new Error('error'),
}