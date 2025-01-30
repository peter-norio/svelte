import type { HandleClientError } from '@sveltejs/kit';

// クライアント側で発生した予期せぬエラーを処理する
export const handleError: HandleClientError = ({ error, status, message }) => {
  console.log('---- clienthandleError ----');
  // errorの型はunknownなので、型を明示的に指定する
  // unknown型なのはerrorオブジェクトは多岐にわたるため
  console.log('クライアント：'+(error as Error).message);

  // {message: string}型で返す
  return {
    message:'クライアント：'+ (error as Error).message,
  };
};