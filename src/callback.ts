import Value from "./value";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";
import Call from "@dikac/t-function/argument/any/call";
import CallbackFromObject from "./callback-from-object";

export default function Callback<Fn extends Functions>(callback : Fn, argument : Parameters<Fn>) : Readonly<Value<ReturnType<Fn>>> {

    return new CallbackFromObject({
        value : callback,
        argument : argument
    })
}
