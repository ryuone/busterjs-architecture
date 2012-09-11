=====================================================
buster-amd
=====================================================

| 非同期モジュールをテストするために、AMD loaderを利用する。
| 自分でloaderを準備する必要があります。loaderは ``require(deps, callback)`` で呼び出せる事を想定している。

インストール
=====================================================

npmを用いてインストールを行う。::

   npm install buster-amd

設定ファイル
=====================================================

| buster-amd extensionは ``pathMapper`` というオプションを一つだけ持っている。
| ``pathMapper`` はoptionalで、Buster.JSのpathsをAMD用のIDに変換する。
| ``pathMapper`` のデフォルトの動作は、 ``/test/my-test.js`` を ``test/my-test`` に変換する。(最初の'/'と拡張子を削除する。)

:file:`/busterjs-shodan/extensions/buster-amd/buster.js`

.. literalinclude:: /busterjs-shodan/extensions/buster-amd/buster.js
   :language: javascript

テスト・動作確認用ファイル
=====================================================

:file:`/busterjs-shodan/extensions/buster-amd/lib/require.js` ::

    RequireJS(http://requirejs.org/)を利用

:file:`/busterjs-shodan/extensions/buster-amd/src/main.js`

.. literalinclude:: /busterjs-shodan/extensions/buster-amd/src/main.js
   :language: javascript

:file:`/busterjs-shodan/extensions/buster-amd/test/amd-test.js`

.. literalinclude:: /busterjs-shodan/extensions/buster-amd/test/amd-test.js
   :language: javascript

内部動作について
=====================================================

buster-amdの内部動作については、

1. ``/buster/load-all.js`` をロードする様に設定する。
2. ``/buster/load-all.js`` がロードされたタイミングで ``require(deps, callback)`` を返す。

本機能は ``ramp-resources`` の機能を利用している。