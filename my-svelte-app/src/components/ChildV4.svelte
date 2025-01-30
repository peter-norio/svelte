<script lang="ts">
  // export letで受け取る
  export let item;
  // item2はデフォルト値を設定
  export let item2 = 'xxx';

  export let name;
  export let message;

</script>

<div>
  <h1>Child</h1>
  <p>props value is {item}</p>
  <p>default value is {item2}</p>
  <p>spread valus are {name}, {message}</p>
</div>
