import { inject, bindable } from 'aurelia-framework';

@inject(Element)
export class InfiniteScrollCustomAttribute {
    isTicking = false;

    @bindable callback;
    @bindable scrollBuffer = 50;
    @bindable isActive = true;

    static ScrollEventName = 'scroll';

    constructor(element) {
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
        this.isActive = (isActive === 'true');
    }

    onScrollChange = () => {
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
    }

    checkScrollPosition() {
        const elementHeight = this.element.scrollHeight;
        const elementOffsetTop = (this.element).offsetTop;
        const windowScrollPosition = window.innerHeight + window.pageYOffset;
        const isPageScrolledToElementBottom = (windowScrollPosition + this.scrollBuffer) >= (elementHeight + elementOffsetTop);

        if (this.callback && isPageScrolledToElementBottom) {
            this.callback();
        }
    }
}