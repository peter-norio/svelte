<script lang="ts">
  let isOk = $state(false);
  const list = $state([1, 2]);
  const tools = $state([
    { id: 1, name: 'svelte' },
    { id: 2, name: 'react' },
    { id: 3, name: 'vue' },
  ]);
</script>

<h1>LogicBlock</h1>
<div>
  <button onclick={() => (isOk = !isOk)}>Toggle</button>
  <!-- 条件によって表示を切り替え -->
  {#if isOk}
    <p>It's ok</p>
  {:else if isOk === null}
    <p>It's null</p>
  {:else}
    <p>It's not ok</p>
  {/if}
</div>
<div>
  <button onclick={() => list.push(list.length + 1)}>push</button>
  <!-- 配列の要素数に合わせて繰り返し表示 -->
  {#each list as num}
    <div>{num}</div>
  {/each}
</div>
<div>
  <h4>インデックス:名前</h4>
  <!-- {#each 配列 as 要素, インデックス (キー)} -->
  {#each tools as item, idx (item.id)}
    <div>{idx} {item.name}</div>
  {/each}
</div>
