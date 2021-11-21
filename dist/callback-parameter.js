import Call from "@dikac/t-function/argument/value/call-parameter";
export default class CallbackParameter {
    constructor(subject) {
        this.subject = subject;
    }
    get value() {
        return Call(this.subject);
    }
}
//# sourceMappingURL=callback-parameter.js.map