class Person {
    constructor(name){
        this.name = name;
    }
};

function greet(postfix) {
    console.log(`Hello, I'm ${this.name}${postfix}`);
}

const minky = new Person('Minky');
greet.call(minky, '!');

const boundGreet = greet.bind(minky);
boundGreet('!');

minky.greet = greet;
minky.greet('!');   