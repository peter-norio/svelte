<script lang="ts">
  //リアクティブな変数を定義(再代入をきっかけにするのでlet)
  let count = $state(0);

  // 配列やオブジェクトもリアクティブにすることができる
  const arr = $state([1, 2, 3, 4, 5]);
  const obj = $state({ name: 'svelte', age: 1 });

  // 他のstateの変更を監視してリアクティブに動作
  const double = $derived(count * 2); // countが変更されると再計算される
  const sumXcount = $derived.by(() => {
    // countかarrが変更されると再計算される
    let results = 0;
    for (const item of arr) {
      results += item;
    }
    return results * count;
  });
</script>

<div>
  <h1>Reactive</h1>
  {count}
  <!-- 再代入でリアクティブに動作 -->
  <button onclick={() => (count += 10)}>plus</button>

  <h2>リアクティブな配列</h2>
  {arr}
  <!-- 配列を直接操作してリアクティブに動作 -->
  <button onclick={() => arr.push(arr.length + 1)}>push</button>

  <h2>リアクティブなオブジェクト</h2>
  {obj.age}
  <!-- オブジェクトのプロパティを直接操作してリアクティブに動作 -->
  <button onclick={() => (obj.age += 1)}>push</button>

  <h2>他のStateに依存するState</h2>
  {double}
  {sumXcount}
</div>
