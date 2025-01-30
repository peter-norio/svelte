<script lang="ts">
  // コンテキストに値をセットするための関数
  import { setContext } from 'svelte';
  import StateMgtChild1 from './StateMgtChild1.svelte';
  import StateMgtChild2 from './StateMgtChild2.svelte';
  // コンテキストで共有するデータの型
  import type { Counter } from '../models/Counter';
  // コンテキストで共有するデータを定義した関数
  import { useCounter } from '../store/useCounter.svelte';

  // useCounter.svelte.tsに移動
  // let count = $state({num:0});
  // const addCount = () => (count.num += 1);
  // setContext<Counter>('count', { count, addCount });

  // コンテキストで共有するデータをセット
  setContext('title', 'title is ABC');
  // 型パラメータで型を指定することもできる
  setContext<Counter>('count', useCounter());
</script>

<h1>State Management Parent</h1>
<!-- 子コンポーネントでしかコンテキストの値を取り出せない -->
<StateMgtChild1 />
<StateMgtChild2 />
