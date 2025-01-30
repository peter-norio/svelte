<script lang="ts">
	// エラー情報をもつpageを取得
	import { page } from '$app/state';
</script>

<h1>/+error.svelte のエラーページ</h1>

<!-- エラー情報を表示 -->
{page.status}
{page.error?.message}
