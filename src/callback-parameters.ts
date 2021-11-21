import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Call from "@dikac/t-function/argument/value/call-parameter";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";
import CallbackParameter from "./callback-parameter";

export default class CallbackParameters<
    FunctionType extends Callable,
> extends CallbackParameter<FunctionType>
{
    constructor(
        callback : FunctionType,
        argument : Parameters<FunctionType>
    ) {

        super({callback, argument})
    }
}
