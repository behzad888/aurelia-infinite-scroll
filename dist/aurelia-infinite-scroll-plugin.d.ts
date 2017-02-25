import {inject,bindable} from 'aurelia-framework';

export declare class InfiniteScrollCustomAttribute {
  isTicking: any;
  callback: any;
  scrollBuffer: any;
  isActive: any;
  static ScrollEventName: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  callbackChanged(newCallback?: any): any;
  scrollBufferChanged(buffer?: any): any;
  isActiveChanged(isActive?: any): any;
  onScrollChange: any;
  checkScrollPosition(): any;
}

// eslint-disable-line no-unused-vars
/* Import all modules that can be concated, eg. ValueConverters, CustomElements etc, for bundling.
 * Those also need to be added to spoonx.js 'importsToAdd' and 'jsResources' and
 * the package.json's' "aurelia.build.resources" (there without extension if view/view-model and with
 * .html extension for views without view-model).
*/
// // eslint-disable-line no-unused-vars
export declare function configure(aurelia?: any, configCallback?: any): any;