// コンテキストに保存するデータの型を定義
export interface Counter { 
    count: { num: number };
    addCount: () => void;
};