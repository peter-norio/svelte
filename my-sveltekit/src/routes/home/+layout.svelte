<script lang="ts">
  const { children } = $props();
</script>

<div>
  <h2>個別のレイアウト（/home/+layout.svelte）</h2>
  {@render children()}
</div>

<style>
  h2 {
    color: blue;
  }
  div {
    border: 3px solid blue;
    padding: 10px;
  }
</style>

