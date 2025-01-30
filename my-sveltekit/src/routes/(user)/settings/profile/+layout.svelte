<script lang="ts">
  const { children } = $props();
</script>

<div>
  <h2>(user)/settings/profileのレイアウト（(user)/settings/profile/+layout.svelte）</h2>
  {@render children()}
</div>

<style>
  h2 {
    color: brown;
  }
  div {
    border: 3px solid brown;
    padding: 10px;
  }
</style>
