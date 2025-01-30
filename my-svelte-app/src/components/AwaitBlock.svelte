<script lang="ts">
  // 指定ms後にresolveするPromise
  function sleepOk(ms: number) {
    return new Promise((resolve) => setTimeout(() => resolve('resolve!'), ms));
  }

  // 指定ms後にrejectするPromise
  function sleepNg(ms: number) {
    return new Promise((_, reject) => setTimeout(() => reject('reject!'), ms));
  }
</script>

<h1>AwaitBlock</h1>
<!-- ２秒後に表示 -->
{#await sleepNg(2000)}
  <p>waiting...</p>
{:then message}
  <p>{message}</p>
{:catch error}
  <p>{error}</p>
{/await}

<!-- 3秒後に表示 -->
{#await sleepOk(3000) then message}
  <p>{message}</p>
{/await}
