class Person {
    constructor(name){
        this.name = name;
    }

    greet1() {
        function doIt() {
            console.log(`Hello, I'm ${this.name}`);
        }
        const boundDoIt = doIt.bind(this);
        boundDoIt();
    }

    greet2() {
        function doIt() {
            console.log(`Hello, I'm ${this.name}`);
        }
        doIt.call(this);
    }

    greet3() {
        const _this = this;
        function doIt() {
            console.log(`Hello, I'm ${_this.name}`);
        }
        doIt();
    }
}

const creamy = new Person('Creamy');
creamy.greet1();
creamy.greet2();
creamy.greet3();