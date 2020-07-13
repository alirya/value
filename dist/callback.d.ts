import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";
export default class Callback<Fn extends Functions> implements Readonly<Value<ReturnType<Fn>>> {
    subject: Value<Fn> & Argument<Parameters<Fn>>;
    constructor(subject: Value<Fn> & Argument<Parameters<Fn>>);
    get value(): ReturnType<Fn>;
}
