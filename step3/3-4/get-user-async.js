import fetch from 'node-fetch';

// 関数宣言時に async キーワードを付与するとその関数は非同期関数となって、返される値が暗黙の 内に Promise.resolve()によってラップされたもの相当になる
async function getUser(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!response.ok) {
        throw new Error(`${response.status} Error`);
    }
    return response.json();
}

console.log('--- Start ---');

async function main() {
    try {
        // 非同期関数の中では他の 非同期関数を、await 演算子をつけて呼びだすことができる
        // await 式によって非同期関数を実行する と、その Promise が resolve() されるか reject() されるまで文字通り待ってもらえるようになる
        const user = await getUser(2);
        console.log(user);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('--- Completed ---');
    }
}

main();