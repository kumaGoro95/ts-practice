function greeter(target) {
    const sayHello = () => {
        console.log(`Hi, ${target}`);
    };

    return sayHello;
}

const greet = greeter('Tom');
greet();

const greeter2 = (target) => {
    console.log(`hello, ${target}`);
};

greeter2('a');