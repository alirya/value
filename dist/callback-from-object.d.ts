import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";
export default class CallbackFromObject<Fn extends Functions> implements Readonly<Value<ReturnType<Fn>>> {
    private subject;
    constructor(subject: Value<Fn> & Argument<Parameters<Fn>>);
    get value(): ReturnType<Fn>;
}
