const rejectList = [2];

function promiseN(n) {
    return new Promise((resolve, reject) => {
        console.log(`--- promise ${n} start ---`);
        setTimeout(() => {
            if (rejectList.includes(n)) {
                reject(new Error(`promise ${n} error`));
            } else {
                resolve(n)
                console.log(`promise ${n} resolved`);
            }
        }, 1000 * n);
    })
}

const promises = [promiseN(3), promiseN(2), promiseN(1)];
let results = [];

try {
    // すべての Promise が完了するのを待って、引数で渡した順にその resolve() が渡す値が格納された配列が返される
    // メソッドが終了しても一度走ったそれぞれの Promise は止まることなく最後まで実行される
    results = await Promise.allSettled(promises);
} catch(error) {
    console.log(error);
}

console.log(results);