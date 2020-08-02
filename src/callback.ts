import Value from "./value";
import Functions from "@dikac/t-function/function";
import CallbackFromObject from "./callback-from-object";

export default function Callback<FunctionT extends Functions>(callback : FunctionT, argument : Parameters<FunctionT>) : Readonly<Value<ReturnType<FunctionT>>> {

    return new CallbackFromObject({
        callback : callback,
        argument : argument
    })
}
