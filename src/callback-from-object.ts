import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Function from "@dikac/t-function/function";
import Call from "@dikac/t-function/argument/value/call";
import Callback from "@dikac/t-function/callback/callback";

export default class CallbackFromObject<
    FunctionT extends Function,
> implements Readonly<Value<ReturnType<FunctionT>>>
{

    constructor(
        private subject : Callback<FunctionT> & Argument<Parameters<FunctionT>>,
    ) {
    }

    get value () : ReturnType<FunctionT> {

        return Call(this.subject);
    }
}
