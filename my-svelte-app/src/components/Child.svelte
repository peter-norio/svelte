<script lang="ts">
  // propsを分割代入で受け取る
  // item2はデフォルト値を設定
  const { item, item2 = 'xxx', name, message } = $props();
</script>

<div>
  <h1>Child</h1>
  <p>props value is {item}</p>
  <p>default value is {item2}</p>
  <p>spread valus are {name}, {message}</p>
</div>
