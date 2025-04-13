type Unit = 'USD' | 'EUR' | 'JPY';

// 型エイリアスの構文はすでに無名で作られてしまった型に参照のための別名を与えているものなので、その型にはオリジナルの名前がないまま
type TCurrency = {
    unit : Unit;
    amount : number;
};

// インターフェース文は型の宣言なので、その型にはオリジナルの名前が与えられる
interface ICurrency {
    unit : Unit;
    amount : number;
}

const priceA: TCurrency = {
    unit: 'USD',
    amount: 100
};
const priceB: ICurrency = {
    unit: 'JPY',
    amount: 1000
};

/**
 * 関数宣言とインターフェース構文はブロック {} で終わる文なのでセミコロンが不要
 * 関数式と型エイリアスの構文は最終的に代入文になるのでセミコロンが必要になる
*/ 