/**
 * Created with IntelliJ IDEA.
 * User: ryuone
 * Date: 12/07/12
 * Time: 23:53
 * License: MIT License
 */
var buster = require("buster");
var format=require("buster-format");
var hasOwn = Object.hasOwnProperty;
var toString = Object.prototype.toString;

var class2type = {};
function setObjectArray(name, index, array) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
}
"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(setObjectArray);

function type( obj ) {
    return obj == null ?
        String( obj ) :
        class2type[ toString.call(obj) ] || "object";
}

function outputObjectKeys(target, deep){
    var keys = Object.keys(target).sort();
    for(var n= 0, nmax=keys.length; n<nmax; n++){
        if(target[keys[n]] instanceof Object){
            console.log(spaces(deep) + "* " + keys[n] + " -> " + (type(target[keys[n]])));
            outputObjectKeys(target[keys[n]], deep+1)
        }
    }
}

function spaces(deep){
    var retstr = "";
    for(var i=0; i<deep; i++){
        retstr += "  ";
    }
    return retstr;
}

module.exports = {
    outputObjectKeys : outputObjectKeys
};