<script lang="ts">
  // コンテキストから値を取り出すための関数
  import { getContext } from 'svelte';
  // コンテキストで共有されてるデータの型
  import type { Counter } from '../models/Counter';

  // コンテキストから値を取り出す
  // 型パラメータで型を指定しないとunknown型になる
  const { count, addCount } = getContext<Counter>('count');
  // コンテキストで共有されてるデータを取り出す
  // 型パラメータで型を指定していないのでunknown型
  const title = getContext('title');
</script>

<h1>State Management Child1</h1>
{title}
{count.num}
<!-- 操作がコンポーネントを跨いでリアクティブに連動する -->
<button onclick={addCount}>++</button>
