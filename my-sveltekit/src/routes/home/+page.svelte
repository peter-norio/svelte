<script lang="ts">
  // goto関数をインポート
  import { goto } from '$app/navigation';

  const third = '333';

  // /docsへプログラム的に遷移する関数
  const navigateToDocs = () => {
    // ここで何かしらの処理を行った後に /docs へ遷移
    goto('/docs');
  };
</script>

<h1>/home に対応</h1>
<p>このページは /home に対応しています。</p>

<!-- パラメータを指定したリンクを配置 -->
<a href="/home/first">/home/first</a>
<a href="/home/second">/home/second</a>
<!-- thirdパラメータには変数を指定 -->
<a href={`/home/${third}`}>/home/third</a>

<!-- /docsへプログラム的に遷移するボタン -->
<button onclick={navigateToDocs}>/docsへ</button>
