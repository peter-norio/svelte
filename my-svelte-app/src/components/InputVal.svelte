<script lang="ts">
  //  入力欄と紐付けるstate
  let inputValue = $state('');
  let num = $state(0);
</script>

<h1>InputVal</h1>
<!-- bind:valueでstateと紐付け -->
<input bind:value={inputValue} />
<p>入力値: {inputValue}</p>

<!-- type="number"で数値型として受け取り -->
<input type="number" bind:value={num} />
<p>{typeof num}: {num}</p>
