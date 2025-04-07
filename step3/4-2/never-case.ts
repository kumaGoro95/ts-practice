const greet = (friend: 'Serval' | 'Cheetah' | 'Leopard') => {
    switch (friend) {
        case 'Serval':
        return `Hello, ${friend}`;
        case 'Cheetah':
            return `Hello, ${friend}`;
        case 'Leopard':
            return `Hello, ${friend}`;
        default: {
        const check: never = friend;
        }
    }
}

console.log(greet('Serval'));
