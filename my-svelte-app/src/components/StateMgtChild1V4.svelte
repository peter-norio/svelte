<script lang="ts">
  import { countStore } from '../store/useCounterStore';
</script>

<h1>State Management Child1</h1>
{$countStore}
<!-- 操作がコンポーネントを跨いでリアクティブに連動する -->
<button onclick={() => ($countStore += 1)}>++</button>
