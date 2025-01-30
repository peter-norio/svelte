<script lang="ts">
  const { children } = $props();
</script>

<div>
  <h2>(user)のレイアウト（(user)/+layout.svelte）</h2>
  {@render children()}
</div>

<style>
  h2 {
    color: orange;
  }
  div {
    border: 3px solid orange;
    padding: 10px;
  }
</style>
