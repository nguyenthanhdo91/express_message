// express モジュールの読み込み
const express = require('express');

// サーバ作成
const app = express();

//ルーティング
// WEBルートにリクエストされたらレスボンス
app.get ('/', (req, res)=> {
    res.send('hello express');
 });
// app.get (URLバス、処理);


app.listen('127.0.0.1',3000);

console.log("server listen ");

