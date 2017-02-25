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
export declare function configure(aurelia?: any): any;