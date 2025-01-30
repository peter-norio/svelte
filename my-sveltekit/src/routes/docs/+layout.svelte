<script lang="ts">
  import type { LayoutProps } from './$types';

  const { children, data }: LayoutProps = $props();
</script>

<div>
  <h2>個別のレイアウト（/docs/+layout.svelte）</h2>
  {@render children()}
  {data.dummyData}
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
