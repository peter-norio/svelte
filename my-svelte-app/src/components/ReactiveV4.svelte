<script lang="ts">
  //リアクティブな変数を定義(再代入をきっかけにするのでlet)
  let count = 0;

  // 配列やオブジェクトもリアクティブにすることができる
  let arr = [1, 2, 3, 4, 5];
  let obj = { name: 'svelte', age: 1 };

  // 他のstateの変更を監視してリアクティブに動作
  $: double = count * 2; // countが変更されると再計算される
  $: sumXcount = (() => {
    // countかarrが変更されると再計算される
    let results = 0;
    for (const item of arr) {
      results += item;
    }
    return results * count;
  })();
</script>

<div>
  <h1>Reactive</h1>
  {count}
  <!-- 再代入でリアクティブに動作 -->
  <button onclick={() => (count += 10)}>plus</button>

  <h2>リアクティブな配列</h2>
  {arr}
  <!-- 配列を再代入でリアクティブに動作 -->
  <button onclick={() => (arr = [...arr, length + 1])}>push</button>

  <h2>リアクティブなオブジェクト</h2>
  {obj.age}
  <!-- オブジェクトのプロパティを直接操作してリアクティブに動作（v5と同じ） -->
  <button onclick={() => (obj = { ...obj, age: obj.age + 1 })}>push</button>

  <h2>他のStateに依存するState</h2>
  {double}
  {sumXcount}
</div>
