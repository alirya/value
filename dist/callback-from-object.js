import Call from "@dikac/t-function/argument/value/call";
export default class CallbackFromObject {
    constructor(subject) {
        this.subject = subject;
    }
    get value() {
        return Call(this.subject);
    }
}
//# sourceMappingURL=callback-from-object.js.map