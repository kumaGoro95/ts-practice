// ユーザー定義の 型ガード(User-Defined Type Guards)
interface User {
    username: string;
    address: {
        zipcode: string;
        town: string;
    };
}

// 型述語(Type Predicate)という表現で、この関数が true を返す場合に引数 arg の型が User であることがコンパイラに示唆される
function isUser(arg: unknown): arg is User {
    const u = arg as User;

    return (
        typeof u?.username === "string" &&
        typeof u?.address.zipcode === "string" &&
        typeof u?.address?.town === "string"
    );
}

const u1: unknown = JSON.parse('{}');
const u2: unknown = JSON.parse(
    '{ "username": "patty", "address": "Maple Town" }'
);
const u3: unknown = JSON.parse(
    '{ "username": "patty", "address": { "zipcode": "111", "town": "Maple Town" } }'
);

[u1, u2, u3].forEach((u) => {
    if(isUser(u)) {
        console.log(`${u.username} lives in ${u.address.town}`);
    } else {
        console.log("Not a User");
        // console.log(`${u.username} lives in ${u.address.town}`); 
    }
})