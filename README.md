# aurelia-infinite-scroll-plugin

Aurelia infinite scroll plugin

## Prerequisites:

Global gulp and jspm installation

`npm i -g gulp jspm`

## Installation guideline template

### Aurelia-Cli

Run `npm i aurelia-infinite-scroll-plugin --save` from your project root.

aurelia-infinite-scroll-plugin makes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "extend",
  {
    "name": "aurelia-infinite-scroll-plugin",
    "path": "../node_modules/aurelia-infinite-scroll-plugin/dist/amd",
    "main": "aurelia-infinite-scroll-plugin",
    "resources": []
  },
  // ...
],
```

### Jspm

Run `jspm i aurelia-infinite-scroll-plugin` from your project root.

Add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "aurelia-infinite-scroll-plugin",
    "[aurelia-infinite-scroll-plugin/**/*.js]"
    //...
  ]
}
```

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

### Webpack

Run `npm i aurelia-infinite-scroll-plugin --save` from your project root.

And add `aurelia-infinite-scroll-plugin` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:behzad888/aurelia-infinite-scroll-plugin` or add `"aurelia-infinite-scroll-plugin": "github:behzad888/aurelia-infinite-scroll-plugin",` to your `typings.json` and run `typings i`.
