import type { Actions } from './$types';

// フォームアクションを定義
// defaultと名前付きアクションは同時に記述できないので、コメントアウトが必要
export const actions: Actions = {
  // // デフォルトのアクション
  // default: async ({ request }) => {
  //   // フォームデータを取得
  //   const data = await request.formData();
  //   // name属性がmessageの値を取得
  //   const message = data.get('message');
  //   // 戻り値にフォーム処理の結果を指定
  //   return { success: true, message };
  // },

  // 名前付きアクション
  create: async ({ request }) => {
    const data = await request.formData();
    const message = data.get('message');
    console.log(message);
    // 戻り値はなくてもOK
  },

  // 名前付きアクション
  // プログレッシブエンハンスメントを有効化したフォームから呼ばれる
  // 特別な記述の変更点はなし
  update: async ({ request }) => {
    const data = await request.formData();
    const message = data.get('message');
    return { success: true, message };
  }

};