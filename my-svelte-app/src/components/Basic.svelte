<!-- scriptタグ内に変数や関数を定義 -->
<script lang="ts">
  let name = 'svelte';
  let href = 'https://www.google.com';
</script>

<!-- {式}で値を埋め込み  -->
<h1>Hello {name}!</h1>
<p>{1 + 1}</p>

<!-- 属性にも{式}で値を設定 -->
<a {href}>googleへ</a>

<!-- 属性名と変数名が一致してる場合 -->
<a {href}>googleへ</a>

<!-- styleタグ内にスタイルを記述 -->
<style>
  h1 {
    color: blue;
  }
</style>
