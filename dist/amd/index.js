define(['exports', './aurelia-infinite-scroll'], function (exports, _aureliaInfiniteScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaInfiniteScroll).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaInfiniteScroll[key];
      }
    });
  });
});