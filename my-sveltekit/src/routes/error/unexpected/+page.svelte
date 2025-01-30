<script lang="ts">
  // throw new Error('ページでクライアントエラーが発生しました');
</script>
<h1>/error/unexpected に対応</h1>
<p>このページは /error/unexpected に対応しています。</p>
<button
  onclick={() => {
    throw new Error('ページでクライアントエラーが発生しました');
  }}>クライアントエラー</button
>
