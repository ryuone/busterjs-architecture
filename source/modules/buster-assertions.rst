=====================================================
buster-assertions
=====================================================

|buster-assertions| とは
==============================================

|Buster.JS| と |Buster.JS| 以外の為のAssertionsとExpectations。

メソッド一覧
-----------------------------------------------------

* add
* addListener
* assert

  * className
  * contains
  * defined
  * equals
  * exception
  * greater
  * hasPrototype
  * isArray
  * isArrayLike
  * isBoolean
  * isFalse
  * isFunction
  * isNaN
  * isNull
  * isNumber
  * isObject
  * isString
  * isTrue
  * less
  * match
  * message
  * near
  * same
  * tagName
  * toString

* bind
* captureException
* count
* create
* deepEqual
* emit
* expect
* fail
* format
* hasListener
* isArguments
* isArrayLike
* isDate
* keys
* match
* on
* once
* refute

  * className
  * contains
  * defined
  * equals
  * exception
  * greater
  * hasPrototype
  * isArray
  * isArrayLike
  * isBoolean
  * isFalse
  * isFunction
  * isNaN
  * isNull
  * isNumber
  * isObject
  * isString
  * isTrue
  * less
  * match
  * near
  * same
  * tagName

* removeListener

ソースコード
==============================================

|buster-assertions(url)| で管理されている。

サンプルコード
==============================================

.. code-block:: javascript

    var assertions=require("buster-assertions");
    console.log(assertions.assert(1));

依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core

