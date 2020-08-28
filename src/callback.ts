import Value from "./value";
import CallbackFromObject from "./callback-from-object";
import Callable from "@dikac/t-function/callable";

export default function Callback<
    FunctionType extends Callable
>(
    callback : FunctionType,
    argument : Parameters<FunctionType>
) : Readonly<Value<ReturnType<FunctionType>>> {

    return new CallbackFromObject({
        callback : callback,
        argument : argument
    })
}
