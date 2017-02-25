define(['exports', './aurelia-infinite-scroll-plugin-plugin'], function (exports, _aureliaInfiniteScrollPluginPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaInfiniteScrollPluginPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaInfiniteScrollPluginPlugin[key];
      }
    });
  });
});