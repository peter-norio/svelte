<script lang="ts">
  const { children } = $props();
</script>

<div>
  <h2>(user)/settingsのレイアウト（(user)/settings/+layout.svelte）</h2>
  {@render children()}
</div>

<style>
  h2 {
    color: purple;
  }
  div {
    border: 3px solid purple;
    padding: 10px;
  }
</style>
