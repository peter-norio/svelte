import type { Counter } from "../models/Counter";

// コンテキストに保存するデータを用意する関数
// stateと操作の関数を返す
export function useCounter(): Counter {
  let count = $state({ num: 0 });
  const addCount = () => {
    count.num += 1;
  }
  return { count, addCount };
}