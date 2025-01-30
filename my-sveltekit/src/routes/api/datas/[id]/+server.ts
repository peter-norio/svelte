import { json, type RequestHandler } from '@sveltejs/kit';

// PUTリクエストに対応するハンドラ
export const PUT: RequestHandler = async ({ params, request }) => {
  // パスパラメータを取得
  const id = params.id;
  // リクエストボディを取得
  const body = await request.json();

  // Responseオブジェクトを返す
  // 例として、ステータスを204に設定して返す
  return new Response(null, { status: 204 });
};

// DELETEリクエストに対応するハンドラ
export const DELETE: RequestHandler = ({ params }) => {
  // パスパラメータを取得
  console.log(params.id);
  return json({ dummy: 'DELETEリクエスト' });
};
