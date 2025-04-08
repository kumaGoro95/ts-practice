// 継承は子クラスが親クラスに強く依存するため、継承より合成が望ましい
class Square {
    readonly name = 'square';
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    getArea = () => new Rectangle(this.side, this.side).getArea();
}

class Rectangle {
    readonly name = 'rectangle'; sideA: number;
    sideB: number;
    constructor(sideA: number, sideB: number) { this.sideA = sideA;
    this.sideB = sideB;
    }
    getArea = () => this.sideA * this.sideB; }