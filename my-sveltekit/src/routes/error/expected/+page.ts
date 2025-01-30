import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  if (true) {
    // 意図的にエラーを発生させる
    // error(404, { message: '意図的にエラー' });
    error(404, { message: '意図的にエラー' });
  }
  return {};
}
