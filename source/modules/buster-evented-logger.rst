=====================================================
buster-evented-logger
=====================================================

|buster-evented-logger| とは
==============================================

イベントを発生させるLoggerのようなユーティリティ。

|buster-capture-server| を経由してブラウザ内でテストを実施する際、コンソールにメッセージを表示する事が出来る。

実際に、ブラウザ上のconsoleオブジェクトを変更しているのは、本モジュールではなく、 |buster| のbuster-wiring.jsの中で行なっている。

メソッド一覧
-----------------------------------------------------

* create
* format

buster.eventEmitterを継承している。

ソースコード
==============================================

|buster-evented-logger(url)| で管理されている。


ドキュメント
==============================================

以下のページを参照。

http://busterjs.org/docs/evented-logger/

サンプルコード
==============================================

.. code-block:: javascript

    var eventedLogger=require('buster-evented-logger');
    var logger = eventedLogger.create();
    // リスナー
    var listener = function(obj){
        console.log(obj.level + " / " + obj.message);
    }

    logger.on("log", listener);             // リスナーを登録
    logger.log("Hey log");                  // "log / Hey log"
    logger.error("Hey error");              // "error / Hey error"
    logger.removeListener("log", listener)  // リスナーを削除


依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core

