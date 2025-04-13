interface User {
    name: string;
}
interface User {
    age: number;
}
interface User {
    species: 'rabbit' | 'cat' | 'dog';
}

const rolley: User = {
    name: 'Rolley',
    age: 3,
    species: 'rabbit'
};

// あくまで新しいプロパティの型定義が追加されていくだけ。TypeScriptに固有なこの概念を『Declaration Merging（宣言のマージ）』と呼ぶ