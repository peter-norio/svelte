// ユーザーを表すを定義
export interface User {
    name: string;
    age: number;
    city: string
};

// コンテキストに保存するデータの型を定義
export interface UserStore {
    users: User[];
    addUser: (name: string) => void;
}