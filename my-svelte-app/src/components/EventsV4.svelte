<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // イベントハンドラ
  function clickHandle(event: Event) {
    if (event.target instanceof HTMLButtonElement) {
      alert(event.target.innerHTML);
    }
  }

  // イベントと同名の関数を定義することで省略表現でイベントを設定できる
  function onclick(event: Event) {
    if (event.target instanceof HTMLButtonElement) {
      alert(event.target.innerHTML);
    }
  }
</script>

<h1>Events</h1>
<div>
  <h3>DOMイベント</h3>
  <!-- イベントハンドラを指定 -->
  <button on:click={clickHandle}>アラート（関数名指定で設定）</button>
  <!-- イベントと同名のハンドラを指定 -->
  <button on:click={onclick}>アラート（省略表現で設定）</button>
  <!-- 処理を直接記述 -->
  <button
    on:click={(event: Event) => {
      if (event.target instanceof HTMLButtonElement) {
        alert(event.target.innerHTML);
      }
    }}>アラート（関数直接指定で設定）</button
  >
</div>

<div>
  <h3>コンポーネントイベント</h3>
  <button on:click={()=>dispatch('childevent')}>子側でコンポーネントイベントを発生</button>
</div>
