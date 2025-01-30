<script lang="ts">
    import type { UserStore } from '$lib/models/User.js';
    import { userStore } from '$lib/stores/userStore.svelte';
    import { setContext } from 'svelte';

    // 現在のパスに沿ったコンポーネント（+layout.svelte か +page.svelte）を受け取る
    const { children, data } = $props();
    // throw new Error('/src/route/+layout.svelte でエラーが発生しました');

    // Context APIを使ってアプリケーション全体で共有するデータを設定
    setContext('users', userStore(data.users));
</script>

<div>
    <h1>ルートレイアウト（src/routes/+layout.svelte）</h1>
    <!-- ここにコンポーネントが表示される -->
    {@render children()}
</div>

<style>
    h1 {
        color: red;
    }
    div {
        border: 3px solid red;
        padding: 10px;
    }
</style>
