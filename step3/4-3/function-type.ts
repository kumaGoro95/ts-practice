// 関数宣言
{
    function add(n: number, m: number): number {
        return n + m;
    }
    console.log(add(2,4));
}

// 関数式
{
    const add = function(n: number, m: number): number {
        return n + m;
    };
    console.log(add(5,7));
}

// アロー関数
{
    const add = (n: number, m: number): number => n + m;
    const hello = (): void => {
        console.log('hello');
    };

    console.log(add(8,1));
    hello();
}

// インターフェースで定義
{
    interface NumOp {
        (n: number, m: number): number;
    }

    const add: NumOp = function(n, m) {
        return n + m;
    };
    const subtract: NumOp = (n, m) => n - m;

    console.log(
        add(1, 2),
        subtract(7, 2));
}

// インラインで定義
{
    const add: { (n: number, m: number): number} = function(n, m) {
        return n = m;
    };
    const subtract: { (n: number, m: number): number } = (n, m) => n - m;

    console.log(
        add(1, 2),
        subtract(7, 2));
}

// インラインでアロー構文によって定義
{
    const add: (n: number, m: number) => number = function(n, m) {
        return n + m;
    };
    const subtract: (n: number, m: number) => number = (n, m) => n - m;

    console.log(
        add(1, 2),
        subtract(7, 2));
}