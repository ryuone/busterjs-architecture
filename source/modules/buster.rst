=====================================================
Buster.JS構成モジュール
=====================================================

|buster| とは
==============================================

|Buster.JS| を構成する本体モジュールで、いろいろなモジュールに依存している。

|buster| が提供するコマンドは以下の通り

* buster
* buster-test(buster testで呼び出される)
* buster-server(buster serverで呼び出される)
* buster-autotest(buster autotestで呼び出される)
* buster-static(buster staticで呼び出される)

.. blockdiag::
   :desctable:

   blockdiag {
    buster -> buster-test;
    buster -> buster-server;
    buster -> buster-autotest;
    buster -> buster-static;
    buster [description = "busterコマンド本体"];
    buster-test [description = "|buster.js| を元にテストを実施する。"];
    buster-server [description = "ブラウザをキャプチャするサーバ http://localhost:1111 を起動する。"];
    buster-autotest [description = "buster testと同じ動きをするが、ファイルを変更した際に、自動でテストを実施する。"];
    buster-static [description = "QUnit, Mochaのような静的なテストを実施するサーバ http://localhost:8282/ を起動する。"];
   }

|buster| のソースコード
==============================================
|buster| で管理されている。

|buster| が依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core
   buster-evented-logger
   buster-assertions
   buster-format
   non_buster/sinon
   buster-test
   buster-sinon
   buster-test-cli
   buster-server-cli
   buster-autotest
   buster-static
   buster-syntax
   non_buster/when

