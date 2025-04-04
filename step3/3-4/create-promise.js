const isSucceeded = Math.random() < 0.5;

// 第 1 引数が『履行ハンドラ(Fulfillment Handler)』、第 2 引数が『拒否ハンドラ(Rejection Handler)』
// Promise が成功時と失敗時に返すものをその引数として渡すようになってる
// 成功時はその値を then メソッド、失敗時は catch メソッドのコールバック関数の引数として受け取れる
const promise = new Promise((resolve, reject) => {
    if(isSucceeded) {
        resolve('success');
    } else {
        reject(new Error('failure'));
    }
});


promise.then((value) => {
    console.log('1.', value);

    return 'success again';
})
.then((value) => {
    console.log('2.', value);
})
.catch((error) => {
    console.error('3.', error);
})
.finally(() => {
    console.log('4.', 'completed');
});