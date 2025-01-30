<script lang="ts">
  const { children } = $props();
</script>

<div>
  <h2>(blog)のレイアウト（(blog)/+layout.svelte）</h2>
  {@render children()}
</div>

<style>
  h2 {
    color: green;
  }
  div {
    border: 3px solid green;
    padding: 10px;
  }
</style>
