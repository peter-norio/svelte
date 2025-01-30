<script lang="ts">
  // load関数の戻り値の値と対応する型をインポート
  import type { PageProps } from './$types';

  // load関数から受け取ったデータを取得
  const { data }:PageProps = $props();
</script>

<h1>/docs に対応</h1>
<p>このページは /docs に対応しています。</p>
<!-- load関数から受け取ったデータを表示 -->
{data.dummyData}
