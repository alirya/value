import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";
import Call from "@dikac/t-function/argument/any/call";
import Callback from "@dikac/t-function/callback/callback";

export default class CallbackFromObject<
    Fn extends Functions,
> implements Readonly<Value<ReturnType<Fn>>>
{

    constructor(
        private subject : Callback<Fn> & Argument<Parameters<Fn>>,
    ) {
    }

    get value () : ReturnType<Fn> {

        return Call(this.subject);
    }
}
