interface T {
    foo: number 
}
interface U {
    bar: string
}
interface V {
    foo? :number;
    baz: boolean;
}

type TnU = T & U;
type TnV = T & V;
type VnTorU = V & (T | U);

// キーが異なる場合はそのプロパティが追加され、同じキーのプロパティは値の型がマージされる

type Unit = 'USD' | 'EUR' | 'JPY';

interface Currency {
    unit: Unit;
    amount: number;
}

interface IPayment extends Currency {
    date: Date;
};

// extends によるインターフェースの拡張と同等のことが、型エイリアスでもインターセクション型を使えばできる
type TPayment = Currency & {
    date: Date;
};

const date  = new Date('2025-04-01T00:00:00Z');
const paymentA: IPayment = {
    unit: 'USD',
    amount: 100,
    date: date
};
const paymentB: TPayment = {
    unit: 'JPY',
    amount: 1000,
    date: date
};