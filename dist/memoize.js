/**
 * Wrap {@link Value} and cache its value
 *
 * suitable to cached value from heave operation
 */
export default class Memoize {
    constructor(subject) {
        this.subject = subject;
        this.clear();
    }
    get memoized() {
        return this.memoize !== undefined;
    }
    /**
     * clear cached value
     */
    clear() {
        this.memoize = undefined;
    }
    get value() {
        if (!this.memoized) {
            this.memoize = {
                value: this.subject.value
            };
        }
        return this.memoize.value;
    }
}
//# sourceMappingURL=memoize.js.map