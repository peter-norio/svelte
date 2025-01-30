// page.tsでのload関数の型をインポート
import type { PageLoad } from "./$types";

// load関数でパラメータを取り出し戻り値に指定することで、コンポーネントに渡すことができる
export const load: PageLoad = ({ params }) => {
  const { title } = params;  
  return { title};
}