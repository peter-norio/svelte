import type { User } from '$lib/models/User';

// コンテキストに保存するデータを用意する関数
// stateと操作の関数を返す
export function userStore(data: User[]) {
  let users = $state<User[]>(data);

  const addUser = (name: string) => {
    const newUser = {
      name: name,
      age: 10,
      city: 'Tokyo',
    };
    users.push(newUser);
  };

  return { users, addUser };
}
