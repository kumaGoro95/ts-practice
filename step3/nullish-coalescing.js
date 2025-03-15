const users = [
    {
        name: 'John',
        address: {
            town: 'town a',
        },
    },
    {
        name: 'Jane',
        address: {
        },
    },
    null
];

for (const u of users) {
    const user = u ?? { name: '(Somebody)' };
    const town = user?.address?.town ?? '(Somewhere)';
    console.log(`${user.name} lives in ${town}`);
}