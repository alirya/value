import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-function/argument/value/call";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";

export default class CallbackFromObject<
    FunctionType extends Callable,
> implements Readonly<Value<ReturnType<FunctionType>>>
{

    constructor(
        private subject : Callback<FunctionType> & Argument<Parameters<FunctionType>>,
    ) {
    }

    get value () : ReturnType<FunctionType> {

        return Call(this.subject);
    }
}
