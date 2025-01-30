<script lang="ts">
  import type { PageProps } from './$types';

  const { form }: PageProps = $props();
</script>

<h1>/other に対応</h1>
<p>このページは /other に対応しています。</p>
<p>フォームアクションの結果：{form?.success}（{form?.message}）</p>
<hr />
