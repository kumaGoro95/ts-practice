interface Color {
    readonly rgb: string;
    opacity: number;
    alias?: string;
}

const tq: Color = { rgb: 'red', opacity: 0.5 };
tq.alias = 'red'; // OK
// tq.rgb = 'blue'; 

// インデックスシグネチャ
interface Status {
    [parameter: string]: number;
}

const myStatus: Status = {
    level: 22,
    exp: 100,
    hp: 100,
    mp: 50,
    attack: 10,
    defense: 5};