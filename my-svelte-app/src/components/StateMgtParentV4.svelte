<script lang="ts">
  import StateMgtChild1V4 from './StateMgtChild1V4.svelte';
  import { countStore } from '../store/useCounterStore';
</script>

<h1>State Management Parent</h1>
{$countStore}
<StateMgtChild1V4 />
