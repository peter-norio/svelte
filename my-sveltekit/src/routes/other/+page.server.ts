import type { Actions } from './$types';

// フォームアクションを定義
export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const message = data.get('message');
    console.log(message);
    return { success: true, message };
  }
};