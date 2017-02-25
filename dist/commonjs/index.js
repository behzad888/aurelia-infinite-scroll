'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaInfiniteScrollPluginPlugin = require('./aurelia-infinite-scroll-plugin-plugin');

Object.keys(_aureliaInfiniteScrollPluginPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaInfiniteScrollPluginPlugin[key];
    }
  });
});