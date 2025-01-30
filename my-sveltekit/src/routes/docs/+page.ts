// +page.tsでのload関数の型をインポート
import type { PageLoad } from "./$types";

// load関数で戻り値に指定した値を、コンポーネントで受け取ることができる
export const load: PageLoad = () => {
  return { dummyData: '「この文字列は /home/+page.ts で用意したデータ」' };
}