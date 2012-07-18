=====================================================
buster-test
=====================================================

|buster-test| とは
==============================================


メソッド一覧
-----------------------------------------------------

* autoRun -> function

  * envOptions -> function
  * run -> function

* reporters -> object

  * dots -> object

    * create -> function
    * endContext -> function
    * focusMode -> function
    * listen -> function
    * log -> function
    * printDeferred -> function
    * printDetails -> function
    * printGlobalMessages -> function
    * printLog -> function
    * printMessages -> function
    * printProgress -> function
    * printUnsupported -> function
    * replaceAsyncMarker -> function
    * startContext -> function
    * testAsync -> function
    * testDeferred -> function
    * testError -> function
    * testFailure -> function
    * testSetUp -> function
    * testSuccess -> function
    * testTimeout -> function
    * unsupportedContext -> function

  * html -> object

    * addMessages -> function
    * addStats -> function
    * contextEnd -> function
    * contextStart -> function
    * create -> function
    * list -> function
    * listen -> function
    * log -> function
    * setRoot -> function
    * success -> function
    * testDeferred -> function
    * testError -> function
    * testFailure -> function
    * testSuccess -> function
    * testTimeout -> function
    * writeIO -> function

  * jsonProxy -> object

    * contextEnd -> function
    * contextStart -> function
    * contextUnsupported -> function
    * create -> function
    * listen -> function
    * log -> function
    * runnerFocus -> function
    * suiteEnd -> function
    * suiteStart -> function
    * testAsync -> function
    * testDeferred -> function
    * testError -> function
    * testFailure -> function
    * testSetUp -> function
    * testStart -> function
    * testSuccess -> function
    * testTearDown -> function
    * testTimeout -> function
    * uncaughtException -> function

  * load -> function
  * quiet -> object

    * create -> function
    * listen -> function

  * specification -> object

    * contextEnd -> function
    * contextStart -> function
    * contextUnsupported -> function
    * create -> function
    * getPrefix -> function
    * listen -> function
    * log -> function
    * printExceptions -> function
    * printMessages -> function
    * printStats -> function
    * printUncaughtExceptions -> function
    * success -> function
    * suiteStart -> function
    * testDeferred -> function
    * testError -> function
    * testFailure -> function
    * testSuccess -> function
    * testTimeout -> function
    * uncaughtException -> function

  * tap -> object

    * contextEnd -> function
    * contextStart -> function
    * contextUnsupported -> function
    * create -> function
    * listen -> function
    * suiteEnd -> function
    * testDeferred -> function
    * testEnd -> function
    * testStart -> function
    * testSuccess -> function

  * teamcity -> object

    * addTest -> function
    * completeTest -> function
    * contextEnd -> function
    * contextStart -> function
    * contextsInPackageName -> number
    * create -> function
    * listen -> function
    * renderTests -> function
    * testError -> function
    * testFailure -> function
    * testStart -> function
    * testSuccess -> function
    * testTimeout -> function

  * xml -> object

    * addTest -> function
    * completeTest -> function
    * contextEnd -> function
    * contextStart -> function
    * contextsInPackageName -> number
    * create -> function
    * listen -> function
    * renderErrors -> function
    * renderTests -> function
    * renderUncaughtExceptions -> function
    * suiteEnd -> function
    * suiteStart -> function
    * suiteTag -> function
    * testError -> function
    * testFailure -> function
    * testStart -> function
    * testSuccess -> function
    * testTimeout -> function
    * uncaughtException -> function

* spec -> object

  * after -> function
  * afterAll -> function
  * afterEach -> function
  * before -> function
  * beforeAll -> function
  * beforeEach -> function
  * describe -> function

    * addListener -> function
    * bind -> function
    * context -> object
    * create -> function
    * emit -> function
    * hasListener -> function
    * on -> function
    * once -> function
    * removeListener -> function

  * expose -> function
  * ifAllSupported -> function
  * ifAnySupported -> function
  * ifSupported -> function
  * it -> function
  * itEventually -> function

* stackFilter -> function

  * filters -> array

    * 0 -> string
    * 1 -> string
    * 2 -> string
    * 3 -> string
    * 4 -> string
    * 5 -> string
    * 6 -> string
    * 7 -> string
    * 8 -> string

  * match -> function

* testCase -> function

  * addListener -> function
  * bind -> function
  * context -> object

    * create -> function
    * getContextSetUp -> function
    * getContextTearDown -> function
    * getContexts -> function
    * getSetUp -> function
    * getSupportRequirements -> function
    * getTearDown -> function
    * getTests -> function
    * isContext -> function
    * isTest -> function
    * parse -> function

  * create -> function
  * emit -> function
  * hasListener -> function
  * on -> function
  * once -> function
  * removeListener -> function

* testContext -> object

  * compile -> function
  * filter -> function
  * listeners -> object

    * create -> array

* testRunner -> object

  * assertionCount -> function
  * assertionFailure -> function
  * callSetUps -> function
  * callTearDowns -> function
  * create -> function
  * error -> function
  * onCreate -> function
  * onCreateListeners -> array

    * 0 -> function
    * 1 -> function
    * 2 -> function

  * runContext -> function
  * runContextUpDown -> function
  * runContexts -> function
  * runSuite -> function
  * runTest -> function
  * runTests -> function
  * timeout -> number

ソースコード
==============================================

|buster-test(url)| で管理されている。


ドキュメント
==============================================

以下のページを参照。

http://busterjs.org/docs/test/

サンプルコード
==============================================

.. code-block:: javascript

依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core
   buster-terminal
   non_buster/when

