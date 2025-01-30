<script lang="ts">
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

  // 親コンポーネントから渡された関数（イベント処理で利用）
  const { parentHandle } = $props();
</script>

<h1>Events</h1>
<div>
  <h3>DOMイベント</h3>
  <!-- イベントハンドラを指定 -->
  <button onclick={clickHandle}>アラート（関数名指定で設定）</button>
  <!-- イベントと同名のハンドラを指定 -->
  <button {onclick}>アラート（省略表現で設定）</button>
  <!-- 処理を直接記述 -->
  <button
    onclick={(event: Event) => {
      alert((event.target as HTMLButtonElement).innerHTML);
    }}>アラート（関数直接指定で設定）</button
  >
</div>

<div>
  <h3>コンポーネントイベント</h3>
  <button onclick={parentHandle}>親からもらった関数で処理</button>
</div>
