// express モジュールの読み込み
const express = require('express');

// サーバ作成
const app = express();

//JSON対応
app.use(express.json());

// URLエンコードされたデータを解析する

app.use(express.urlencoded({extended: true}));

//クロスドメインの許可  XSS

app.use ( (req, res, next)=> {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    });
//静的コンテンツ
app.use(express.static(__dirname + '/public'));
 //次の処理
//ルーティング
//message.html から Ajax で POST リクエストされる
app.post ('/', (req, res)=> {
    let message = req.body
   let result = {
       message: message,
       datetime: new Date(),

   };
   // レスボンス
   res.send(result)
 });
//ルーティング

//app.get(URLパス, 処理);

app.listen(3000);

console.log('Server listen: http://localhost:3000');