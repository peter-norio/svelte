<script lang="ts">
    import { enhance } from '$app/forms';
  import type { PageProps } from './$types';

  //  フォームアクションの結果を取得
  const { form }: PageProps = $props();
  console.log(99999);
</script>

<h1>/formaction に対応</h1>
<p>このページは /formaction に対応しています。</p>
<p>フォームアクションの結果：{form?.success}（{form?.message}）</p>
<hr />

<!-- 同階層で用意したデフォルトのアクションが実行されるフォーム -->
<h3>同階層のデフォルトアクションが動作</h3>
<h5>actionは未指定</h5>
<form method="POST">
  <label for="message"
    >メッセージ：
    <input type="text" name="message" />
  </label>
  <button type="submit">送信</button>
</form>

<!-- 同階層で用意したcreateアクションが実行されるフォーム -->
<h3>同階層のcreateアクションが動作</h3>
<h5>action="?/create" を指定</h5>
<form method="POST" action="?/create">
  <label for="message"
    >メッセージ：
    <input type="text" name="message" />
  </label>
  <button type="submit">送信</button>
</form>

<!-- 別階層（/other）で用意したcreateアクションが実行されるフォーム -->
<h3>別階層（/other）のcreateアクションが動作</h3>
<h5>action="/other?/create" を指定</h5>
<form method="POST" action="/other?/create">
  <label for="message"
    >メッセージ：
    <input type="text" name="message" />
  </label>
  <button type="submit">送信</button>
</form>

<!-- プログレッシブエンハンスメントを適用したフォーム -->
<h3>プログレッシブエンハンスメント</h3>
<form method="POST" action="?/update" use:enhance>
  <label for="message"
    >メッセージ：
    <input type="text" name="message" />
  </label>
  <button type="submit">送信</button>
</form>
