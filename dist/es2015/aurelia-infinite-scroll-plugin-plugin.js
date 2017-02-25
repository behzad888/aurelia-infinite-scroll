var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable } from 'aurelia-framework';

export let InfiniteScrollCustomAttribute = (_dec = inject(Element), _dec(_class = (_class2 = (_temp = _class3 = class InfiniteScrollCustomAttribute {

    constructor(element) {
        this.isTicking = false;

        _initDefineProp(this, 'callback', _descriptor, this);

        _initDefineProp(this, 'scrollBuffer', _descriptor2, this);

        _initDefineProp(this, 'isActive', _descriptor3, this);

        this.onScrollChange = () => {
            if (!this.isActive) {
                return false;
            }

            if (!this.isTicking) {
                window.requestAnimationFrame(() => {
                    this.checkScrollPosition();
                    this.isTicking = false;
                });
            }

            this.isTicking = true;
        };

        this.element = element;
    }

    attached() {
        window.addEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
        this.onScrollChange();
    }

    detached() {
        window.removeEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
    }

    callbackChanged(newCallback) {
        this.callback = newCallback;
    }

    scrollBufferChanged(buffer) {
        this.scrollBuffer = +buffer;
    }

    isActiveChanged(isActive) {
        this.isActive = isActive === 'true';
    }

    checkScrollPosition() {
        const elementHeight = this.element.scrollHeight;
        const elementOffsetTop = this.element.offsetTop;
        const windowScrollPosition = window.innerHeight + window.pageYOffset;
        const isPageScrolledToElementBottom = windowScrollPosition + this.scrollBuffer >= elementHeight + elementOffsetTop;

        if (this.callback && isPageScrolledToElementBottom) {
            this.callback();
        }
    }
}, _class3.ScrollEventName = 'scroll', _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'callback', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'scrollBuffer', [bindable], {
    enumerable: true,
    initializer: function () {
        return 50;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'isActive', [bindable], {
    enumerable: true,
    initializer: function () {
        return true;
    }
})), _class2)) || _class);
export function configure(aurelia) {
    aurelia.globalResources('./infinite-scroll');
}