const permissions = {
    r: 0b1100,
    w: 0b1010,
    x: 0b1001,
};

// オブジェクトの型からキーを抜き出す
type PermChar = keyof typeof permissions;
const readable: PermChar = 'r';
// const writable: PermChar = 'z';