/**
 * Readonly wrapper for {@link Value}
 */
export default class Readonly {
    constructor(subject) {
        this.subject = subject;
    }
    get value() {
        return this.subject.value;
    }
}
//# sourceMappingURL=readonly.js.map