// page.tsでのload関数の型をインポート
import type { PageLoad } from "./$types";

// load関数でGETリクエストを送信
export const load: PageLoad = async({ fetch }) => {
  const res = await fetch('/api/datas');
  const data = await res.json();
  return { data };
}
