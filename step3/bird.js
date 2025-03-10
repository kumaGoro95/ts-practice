class Bird {
    #className = 'Bird';

    constructor(name) {
        this.name = name;
    }

    static explain() {
        console.log('This is Bird class');
    }

    cry(sound)  {
        console.log(`${this.name} says ${sound}`);
    }

    introduce() {
        console.log(`I'm ${this.name}`);
    }
}

class FlyableBird extends Bird {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}

Bird.explain();

const penguin = new Bird('Penguin');
penguin.introduce();

const hawk = new FlyableBird('Hawk');
hawk.cry('quack');
hawk.fly();