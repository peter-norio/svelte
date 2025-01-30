import { json, text, type RequestHandler } from '@sveltejs/kit';

// GETリクエストに対応するハンドラ
export const GET: RequestHandler = () => {
  // json関数でResponseオブジェクトを返す
  return json({ dummy: 'GETリクエスト' });
};

// POSTリクエストに対応するハンドラ
export const POST: RequestHandler = async ({ request }) => {
  // requestオブジェクトのjsonメソッドでリクエストボディを取得
  const body = await request.json();
  // 第二引数のオプションでステータスコードを指定
  return json({ dummy: 'POSTリクエスト', body }, { status: 201 });
};

// 該当するメソッドがない場合のフォールバックハンドラ
export const fallback: RequestHandler = async ({ request }) => {
  // text関数でResponseオブジェクトを返す
  return text(`${request.method} には対応していません`, { status: 405 });
};