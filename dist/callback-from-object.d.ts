import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/callback/callback";
export default class CallbackFromObject<FunctionT extends Function> implements Readonly<Value<ReturnType<FunctionT>>> {
    private subject;
    constructor(subject: Callback<FunctionT> & Argument<Parameters<FunctionT>>);
    get value(): ReturnType<FunctionT>;
}
