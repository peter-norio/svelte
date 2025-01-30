import type { LayoutServerLoad } from './$types';

// stateの初期値を取得して渡す
export const load: LayoutServerLoad = async ({ fetch }) => {
  const response = await fetch('http://localhost:3000/data');
  const users = await response.json();
  return { users };
};