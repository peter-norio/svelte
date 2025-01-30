import type { HandleServerError } from '@sveltejs/kit';

// サーバー側で発生した予期せぬエラーを処理する
export const handleError: HandleServerError = ({ error, status, message }) => {
  console.log('---- handleError ----');
  console.log('ステータスコード:', status);
  console.log('ステータスメッセージ:', message);
  // errorの型はunknownなので、型を明示的に指定する
  // unknown型なのはerrorオブジェクトは多岐にわたるため
  console.log((error as Error).message);

  // {message: string}型で返す
  return {
    message: (error as Error).message,
  };
};