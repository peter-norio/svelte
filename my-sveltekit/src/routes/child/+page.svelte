<script lang="ts">
  import AddUserForm from '$lib/components/AddUserForm.svelte';
  import type { UserStore } from '$lib/models/User';
  import { getContext } from 'svelte';

  // コンテキストからデータを取得
  const { users } = getContext<UserStore>('users');
</script>

<h1>/child に対応</h1>
<p>このページは /child に対応しています。</p>

<div>
  {#each users as user}
    <h2>{user.name}</h2>
    <p>{user.age}</p>
  {/each}
</div>

<!-- ユーザー追加フォームを配置 -->
<AddUserForm />
