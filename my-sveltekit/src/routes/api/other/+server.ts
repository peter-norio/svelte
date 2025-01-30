import { json, type RequestHandler } from '@sveltejs/kit';

// GETリクエストに対応するハンドラ
export const GET: RequestHandler = async ({ request, fetch }) => {
  // json-server（ダミー）にGETリクエストを送信
  const res = await fetch('http://localhost:3000/data');
  const data = await res.json();
  return json({ data });
};
