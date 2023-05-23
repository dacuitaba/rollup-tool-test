(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zDesign = {}));
})(this, (function (exports) { 'use strict';

    var a = 1;
    var say = function (name) {
        console.log(name);
    };

    exports.a = a;
    exports.say = say;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
