<script lang="ts">
  // 【load関数】load関数の戻り値の値と対応する型をインポート
  import type { PageProps } from './$types';
  // 【load関数】load関数からパラメータを受け取る
  const { data }: PageProps = $props();

  // 【pageストア】pageストアをインポート
  import { page } from '$app/stores';
  // 【pageストア】pageストアからパラメータを受け取る
  const title = $page.params.title
</script>

<h1>/home/[title] に対応</h1>
 <!-- 【load関数】パラメータの値を表示 -->
<p>このページは /home/{data.title} に対応しています。</p>
<!-- 【pageストア】パラメータの値を表示 -->
{title}
