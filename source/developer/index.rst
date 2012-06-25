=====================================================
Buster.JS開発者用
=====================================================

開発者、コントリビューター向けの |Buster.JS| の設定方法について

開発環境のセットアップ
=====================================================

はじめに
-----------------------------------------------------

|buster-dev-tools| をnpm packageとしてインストールしている場合は、uninstallしてください。これはpackageとしてはサポート対象外となります。

.. code-block:: bash

     npm uninstall -g buster-dev-tools

初回セットアップ
-----------------------------------------------------

まずはじめに、 `node.js`_ をインストールしていないのであれば、インストールします。またgitもインストールします。
Windowsユーザの場合は、 `mysysgit`_ と `TortoiseGit`_ がおすすめ。

開発環境は |buster-dev-tools| というCLIで管理されています。まずはじめに、 |Buster.JS| の全てのパッケージを保持するためのディレクトリを作成します。
そして、その作成したディレクトリの中で、 |buster-dev-tools| をgithubからcloneします。

.. code-block:: bash

     mkdir buster-all
     cd buster-all
     git clone https://github.com/busterjs/buster-dev-tools.git

git cloneが完了したら、環境変数を設定します。 以下{path to buster-all}は、buster-dev-toolsをgit pullしたディレクトリを指しています。

.. code-block:: bash

     # Linux / MacOS
     export NODE_PATH={path to buster-all}
     export PATH=$NODE_PATH/buster-dev-tools/bin:$PATH
     export PATH=$NODE_PATH/buster/bin:$PATH

.. code-block:: bat

     rem Windows
     SET NODE_PATH={path to buster-all}
     SET PATH=%NODE_PATH%\buster-dev-tools\bin;%PATH%
     SET PATH=%NODE_PATH%\buster\bin;%PATH%

上記の設定が完了したら、以下のコマンドを実行する事で |Buster.JS| に関係のある全てのパッケージを取得(git clone)できます。

.. code-block:: bash

     buster-dev-tools pull

もし、buster-dev-toolsコマンドが見つからないと言われたら、Linux/MacOSの方は、 ``rehash`` または ``hash -r`` のコマンドを実行してください。
Windowsの方は、大丈夫だと思います。

リポジトリのリフレッシュ処理
-----------------------------------------------------

取得したリポジトリの中身を最新の状態にしたい場合、以下のコマンドで最新状態になります。(内部ではgit pullしてます。)

.. code-block:: bash

     buster-dev-tools pull


ドキュメントサーバの起動
=====================================================

|buster-docs| を用いて簡単にドキュメントサーバを起動する事ができます。

先程、 ``buster-dev-tools pull`` した際に、 |buster-docs| もインストールされているので、 |buster-docs| ディレクトリに移動して ``node bin/server``
を起動するだけで、サーバ http://127.0.0.1:8090 が起動します。

.. code-block:: bash

     cd buster-docs
     node bin/server

もし、 |buster-docs| を単体で使う場合は、以下の方法で |buster-docs| 取得してください。起動方法は上記の手順で起動できます。

.. code-block:: bash

     git clone https://github.com/busterjs/buster-docs.git
     cd buster-docs
     npm install

コントリビューションガイドライン
=====================================================

busterjs-devメーリングリストへの質問について
-----------------------------------------------------

`busterjs-dev mailing list`_ で |Buster.JS| に関するディスカッションを行なっている。
`githubのissue tracker`_ でも同様にディスカッションを行なっている。

コーディングスタイル
-----------------------------------------------------

未定

ロードマップ
-----------------------------------------------------

`Buster.JS Roadmap`_

.. _`node.js`: http://www.nodejs.org
.. _`mysysgit`: http://code.google.com/p/msysgit/
.. _`TortoiseGit`: http://code.google.com/p/tortoisegit
.. _`busterjs-dev mailing list`: http://groups.google.com/group/busterjs-dev
.. _`githubのissue tracker`: https://github.com/busterjs/buster/issues
.. _`Buster.JS Roadmap`: http://busterjs.org/roadmap.html