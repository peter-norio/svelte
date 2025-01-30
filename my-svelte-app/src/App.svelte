<script lang="ts">
  import AwaitBlock from './components/AwaitBlock.svelte';
  import Basic from './components/Basic.svelte';
  import Child from './components/Child.svelte';
  import ChildV4 from './components/ChildV4.svelte';
  import Events from './components/Events.svelte';
  import EventsV4 from './components/EventsV4.svelte';
    import ImageView from './components/ImageView.svelte';
    import InputVal from './components/InputVal.svelte';
  import LogicBlock from './components/LogicBlock.svelte';
  import Reactive from './components/Reactive.svelte';
  import ReactiveV4 from './components/ReactiveV4.svelte';
    import StateMgtChild2 from './components/StateMgtChild2.svelte';
    import StateMgtParent from './components/StateMgtParent.svelte';
    import StateMgtParentV4 from './components/StateMgtParentV4.svelte';
  // Childにpropsで渡すデータ
  const data = { name: 'svelte', message: 'Hello' };
  // Evemtsコンポーネントで使用する関数
  let isOk = $state(true);
  function parentHandle() {
    isOk = !isOk;
  }
</script>

<Basic />
<Reactive />
<!-- <ReactiveV4 /> -->
<Child item={'child'} {...data} />
<!-- <ChildV4 item={'child'} {...data} /> -->
<LogicBlock />
<AwaitBlock />
<Events {parentHandle} />
{#if isOk}
  <p>OK</p>
{:else}
  <p>NG</p>
{/if}
<!-- <EventsV4 on:childevent={parentHandle} />
{#if isOk}
  <p>OK</p>
{:else}
  <p>NG</p>
{/if} -->
<InputVal />
<StateMgtParent />
<!-- <StateMgtParentV4 /> -->
<ImageView />
