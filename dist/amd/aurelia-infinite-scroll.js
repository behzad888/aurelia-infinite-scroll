define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.InfiniteScrollCustomAttribute = undefined;
    exports.configure = configure;

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

    var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

    var InfiniteScrollCustomAttribute = exports.InfiniteScrollCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = (_class2 = (_temp = _class3 = function () {
        function InfiniteScrollCustomAttribute(element) {
            var _this = this;

            

            this.isTicking = false;

            _initDefineProp(this, 'callback', _descriptor, this);

            _initDefineProp(this, 'scrollBuffer', _descriptor2, this);

            _initDefineProp(this, 'isActive', _descriptor3, this);

            this.onScrollChange = function () {
                if (!_this.isActive) {
                    return false;
                }

                if (!_this.isTicking) {
                    window.requestAnimationFrame(function () {
                        _this.checkScrollPosition();
                        _this.isTicking = false;
                    });
                }

                _this.isTicking = true;
            };

            this.element = element;
        }

        InfiniteScrollCustomAttribute.prototype.attached = function attached() {
            window.addEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
            this.onScrollChange();
        };

        InfiniteScrollCustomAttribute.prototype.detached = function detached() {
            window.removeEventListener(InfiniteScrollCustomAttribute.ScrollEventName, this.onScrollChange);
        };

        InfiniteScrollCustomAttribute.prototype.callbackChanged = function callbackChanged(newCallback) {
            this.callback = newCallback;
        };

        InfiniteScrollCustomAttribute.prototype.scrollBufferChanged = function scrollBufferChanged(buffer) {
            this.scrollBuffer = +buffer;
        };

        InfiniteScrollCustomAttribute.prototype.isActiveChanged = function isActiveChanged(isActive) {
            this.isActive = isActive === 'true';
        };

        InfiniteScrollCustomAttribute.prototype.checkScrollPosition = function checkScrollPosition() {
            var elementHeight = this.element.scrollHeight;
            var elementOffsetTop = this.element.offsetTop;
            var windowScrollPosition = window.innerHeight + window.pageYOffset;
            var isPageScrolledToElementBottom = windowScrollPosition + this.scrollBuffer >= elementHeight + elementOffsetTop;

            if (this.callback && isPageScrolledToElementBottom) {
                this.callback();
            }
        };

        return InfiniteScrollCustomAttribute;
    }(), _class3.ScrollEventName = 'scroll', _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'callback', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'scrollBuffer', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return 50;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'isActive', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class2)) || _class);
    function configure(aurelia) {
        aurelia.globalResources('./infinite-scroll');
    }
});