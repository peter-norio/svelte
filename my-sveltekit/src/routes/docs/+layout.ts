// +layout.tsでのload関数の型をインポート
import type { LayoutLoad } from "./$types";

// load関数で戻り値に指定した値を、コンポーネントで受け取ることができる
export const load: LayoutLoad = () => {
  return { dummyData: '「この文字列は /home/+layout.ts で用意したデータ」' };
}