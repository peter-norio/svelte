<script lang="ts">
  // load関数の戻り値の値と対応する型をインポート
  import type { PageData } from './$types';

  // 結果表示用のstate
  let resData = $state();

  // load関数から受け取ったデータを取得
  const { data }: { data: PageData } = $props();

  // GETリクエスト
  const getData = async () => {
    const res = await fetch('/api/datas');
    const data = await res.json();
    resData = data.dummy;
  };

  // POSTリクエスト
  const postData = async () => {
    const res = await fetch('/api/datas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'abcde' }),
    });
    const data = await res.json();
    resData = data.dummy;
  };

  // PUTリクエスト
  const putData = async () => {
    const res = await fetch('/api/datas/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'abcde' }),
    });
    resData = res.status;
  };

  // DELETEリクエスト
  const deleteData = async () => {
    const res = await fetch('/api/datas/1', {
      method: 'DELETE',
    });
    const data = await res.json();
    resData = data.dummy;
  };

  // GETリクエスト（server.ts からさらに json-server にGET）
  const getFromServer = async () => {
    const res = await fetch('/api/other');
    const data = await res.json();
    resData = data.data[0].name;
  };
</script>

<h1>/form に対応</h1>
<p>このページは /form に対応しています。</p>
<div>
  <h2>fetchの確認</h2>
  <p>fetchの結果：{resData}</p>
  <button onclick={getData}>/api/datas にGET</button>
  <button onclick={postData}>/api/datas にPOST</button>
  <button onclick={putData}>/api/datas/1 にPUT</button>
  <button onclick={deleteData}>/api/datas/1 にDELETE</button>
  <button onclick={getFromServer}>/api/other にGET(さらにサーバーアプリにGET)</button>
</div>

<div>
  <h2>load関数でのfetchの確認</h2>
  <p>load関数からの値：{data.data.dummy}</p>
</div>


<style>
  div {
    border: 1px solid black;
    padding: 10px;
  }
</style>
