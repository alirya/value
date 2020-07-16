import Value from "./value";
import Functions from "@dikac/t-function/function";
import CallbackFromObject from "./callback-from-object";

export default function Callback<Fn extends Functions>(callback : Fn, argument : Parameters<Fn>) : Readonly<Value<ReturnType<Fn>>> {

    return new CallbackFromObject({
        callback : callback,
        argument : argument
    })
}
