import {InfiniteScrollCustomAttribute} from './infinite-scroll'; // eslint-disable-line no-unused-vars
/* Import all modules that can be concated, eg. ValueConverters, CustomElements etc, for bundling.
 * Those also need to be added to spoonx.js 'importsToAdd' and 'jsResources' and
 * the package.json's' "aurelia.build.resources" (there without extension if view/view-model and with
 * .html extension for views without view-model).
*/
// import {AuthFilterValueConverter} from './authFilterValueConverter'; // eslint-disable-line no-unused-vars

export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {
	// config(configCallback);
  }
}