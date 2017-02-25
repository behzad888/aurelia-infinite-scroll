define(['exports', './aurelia-infinite-scroll-plugin'], function (exports, _aureliaInfiniteScrollPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaInfiniteScrollPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaInfiniteScrollPlugin[key];
      }
    });
  });
});