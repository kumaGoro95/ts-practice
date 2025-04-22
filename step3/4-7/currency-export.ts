const rate: {[unit: string]: number} = {
    USD: 1,
    EUR: 0.9,
    JPY: 108,
    GBP: 0.8,
};

type Unit = keyof typeof rate;
interface Currency {
    unit: Unit;
    amount: number;
}

const Currency = {
    exchange(currency: Currency, unit: Unit): Currency {
        const amount = (currency.amount / rate[currency.unit]) * rate[unit];

        return { unit, amount };
    },
};

// TypeScriptでは、同じ名前空間の中に『変数宣言空間(Variable Declaration Space)』と『型宣言空間(Type Declaration Space)』という
// 2つの宣言空間が存在していて、名前の管理が別々になっている。そのため変数や関数と型で同一の名前を持つことができる
export { Currency };