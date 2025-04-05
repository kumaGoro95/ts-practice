class DoubleError extends Error {
  static {
    this.prototype.name = 'DoubleError';
  }
}

class TripleError extends Error {
    static {
        this.prototype.name = 'TripleError';
    }
}

class QuintupleError extends Error {
    static {
        this.prototype.name = 'QuintupleError';
    }
}
class SomeError extends Error{}

try {
    const num = Math.floor(Math.random() * 100);
    console.log(num);

    if(num % 2 === 0) {
        throw new DoubleError('Even number error');
    }else if(num % 3 === 0) {
        throw new TripleError('Odd number error');
    } else if(num % 5 === 0) {
        throw new QuintupleError('Five number error');
    } else {
        throw new SomeError('Some number error');
    }   
}catch(error) {
    if(error instanceof DoubleError) {
        console.log(`${error.name}: divisible by 2`);
    } else if(error instanceof TripleError) {
        console.log(`${error.name}: divisible by 3`);
    } else if(error instanceof QuintupleError) {
        console.log(`${error.name}: divisible by 5`);
    } else {
        // Error オブジェクトには cause プロパティ176というものがあって、そこにキャッチした例外を入れておくとエラー表示時に入れ子になって表示される
        throw new Error('Unknown error', {
            cause: error
        });
    } 
}