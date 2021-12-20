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
