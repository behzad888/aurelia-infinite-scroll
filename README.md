# aurelia-infinite-scroll
<<<<<<< HEAD

Aurelia infinite scroll plugin

## Prerequisites:

Global gulp and jspm installation

`npm i -g gulp jspm`

## Installation guideline template

### Aurelia-Cli

Run `npm i aurelia-infinite-scroll --save` from your project root.

Aurelia-infinite-scroll makes use of `extend`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "extend",
  {
    "name": "aurelia-infinite-scroll",
    "path": "../node_modules/aurelia-infinite-scroll/dist/amd",
    "main": "aurelia-infinite-scroll",
    "resources": []
  },
  // ...
],
```

### Jspm

Run `jspm i aurelia-infinite-scroll` from your project root.

Add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "aurelia-infinite-scroll",
    "[aurelia-infinite-scroll/**/*.js]"
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

Run `npm i aurelia-infinite-scroll --save` from your project root.

And add `aurelia-infinite-scroll` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:behzad888/aurelia-infinite-scroll` or add `"aurelia-infinite-scroll": "github:behzad888/aurelia-infinite-scroll",` to your `typings.json` and run `typings i`.
=======
Aurelia infinite scroll plugin
>>>>>>> 26639c4f583a5a2462e4591bcd7c9d79c7f444a2
