// 条件付き型(Conditional Type)
// オブジェクトの型から任意のプロパティの型を抽出したりするときなんかに使える
interface User { id: unknown}
type NewUser = User & { id: string };
type OldUser = User & { id: number };

interface Book { isbn: string }

type IdOf<T> = T extends User ? T['id'] : never;

type NewUserId = IdOf<NewUser>;
type OldUserId = IdOf<OldUser>;
type BookId = IdOf<Book>;

