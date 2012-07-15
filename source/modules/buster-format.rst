=====================================================
buster-format
=====================================================

|buster-format| とは
==============================================

assertion等でエラーが発生した際に、対象のオブジェクトをユーザが読みやすいように、フォーマットを変換出来る。
HTML要素に関しても文字列にして出力する事が可能。

メソッド一覧
-----------------------------------------------------

* ascii

  * array
  * constructorName
  * element
  * func
  * object

* excludeConstructors
* quoteStrings

ソースコード
==============================================

|buster-format(url)| で管理されている。


ドキュメント
==============================================

以下のページを参照。

http://busterjs.org/docs/format/

サンプルコード
==============================================

.. code-block:: javascript

    var buster = require("buster");
    var format=require("buster-format");
    console.log(buster.format === format);     // => true

    var object = {
        name: "ryuone"
    };

    console.log(format.ascii(object));    // { name: "ryuone" }

    var developer = {
        name: "ryuone",
        interests: ["Programming", "JavaScript", "TV"],

        location: {
            language: "Japanese",
            city: "Osaka",

            getCity: function getCity() {
                return this.city;
            }
        },

        speak: function () {
            return "こんにちは。 It's " + this.location.language;
        }
    };

    console.log(format.ascii(developer));    // { 長いので省略.... }

    console.log(format.ascii.func(developer.speak));            // function () {}
    console.log(format.ascii.func(developer.location.getCity)); // function getCity() {}


依存するモジュール
==============================================

.. toctree::
   :maxdepth: 1

   buster-core

