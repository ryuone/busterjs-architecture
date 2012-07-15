=====================================================
buster-assertions
=====================================================

|buster-assertions| とは
==============================================

|Buster.JS| と |Buster.JS| 以外の為のAssertionsとExpectations。

メソッド一覧
-----------------------------------------------------

* add -> function
* assert -> function

  * alwaysCalledOn -> function
  * alwaysCalledWith -> function
  * alwaysCalledWithExactly -> function
  * alwaysThrew -> function
  * callOrder -> function
  * called -> function
  * calledOn -> function
  * calledOnce -> function
  * calledOnceWith -> function
  * calledThrice -> function
  * calledTwice -> function
  * calledWith -> function
  * calledWithExactly -> function
  * className -> function
  * contains -> function
  * defined -> function
  * equals -> function
  * exception -> function
  * greater -> function
  * hasPrototype -> function
  * isArray -> function
  * isArrayLike -> function
  * isBoolean -> function
  * isFalse -> function
  * isFunction -> function
  * isNaN -> function
  * isNull -> function
  * isNumber -> function
  * isObject -> function
  * isString -> function
  * isTrue -> function
  * less -> function
  * match -> function
  * message -> string
  * near -> function
  * same -> function
  * tagName -> function
  * threw -> function
  * toString -> function

* captureException -> function
* count -> number
* deepEqual -> function
* expect -> function
* fail -> function
* format -> function
* isArguments -> function
* isArrayLike -> function
* isDate -> function
* keys -> function
* listeners -> object

  * failure -> array
  * pass -> array

* match -> function
* refute -> function

  * alwaysCalledOn -> function
  * alwaysCalledWith -> function
  * alwaysCalledWithExactly -> function
  * alwaysThrew -> function
  * callOrder -> function
  * called -> function
  * calledOn -> function
  * calledOnce -> function
  * calledOnceWith -> function
  * calledThrice -> function
  * calledTwice -> function
  * calledWith -> function
  * calledWithExactly -> function
  * className -> function
  * contains -> function
  * defined -> function
  * equals -> function
  * exception -> function
  * greater -> function
  * hasPrototype -> function
  * isArray -> function
  * isArrayLike -> function
  * isBoolean -> function
  * isFalse -> function
  * isFunction -> function
  * isNaN -> function
  * isNull -> function
  * isNumber -> function
  * isObject -> function
  * isString -> function
  * isTrue -> function
  * less -> function
  * match -> function
  * near -> function
  * same -> function
  * tagName -> function
  * threw -> function

buster.eventEmitterを継承している。

ソースコード
==============================================

|buster-assertions(url)| で管理されている。


ドキュメント
==============================================

以下のページを参照。

http://busterjs.org/docs/assertions/

サンプルコード
==============================================

.. code-block:: javascript

    var buster = require("buster");
    var assertions=require("buster-assertions");
    console.log(buster.assertions === assertions);     // => true

    var assert = assertions.assert;
    var refute = assertions.refute;

    assertions.on("failure", function (err) {
        console.log("failure : " + err.message);
    });

    try{
        assert.equals(42, 42);
        refute.equals(42, 43);
        assert.equals(42, 43);  // Exceptionが発生する。
    }catch(e){
        console.log(e)          // { [AssertionError: [assert.equals] 42 expected to be equal to 43] name: 'AssertionError' }
    }

    assertions.on("failure", function (err) {
        console.log("failure : " + err.message);
    });

    try{
        assert.equals(42, 43);  // Exceptionが発生する。
                                // failure : [assert.equals] 42 expected to be equal to 43
    }catch(e){
    }

依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core

