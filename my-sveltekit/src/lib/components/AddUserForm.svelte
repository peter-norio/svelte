<script lang="ts">
  import type { UserStore } from '$lib/models/User';
  import { getContext } from 'svelte';

  // コンテキストからユーザー追加関数を取得
  const { addUser } = getContext<UserStore>('users');

  // 入力値を受け取る変数
  let newUser = '';
</script>

<input bind:value={newUser} />
<button onclick={() => addUser(newUser)}>追加</button>
