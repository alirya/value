import ValueType from "../../boolean/string/value-parameters";
import Callback from "@dikac/t-function/assert/throwable/callback-parameters";
import Value from "../../value";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import ValueParameters from "./value-parameters";

export default function ValueParameter(
    // string : unknown,
    // value : (
    //     valid : boolean,
    //     value : unknown,
    // ) => string = ValueType,
    // error : (message:string)=>Error = (string : string) => new Error(string),
    {
        value,
        message,
        error
    } : Value<unknown> & Message<Dynamic<unknown, string>> & {error : (message:string)=>Error}
) : Error {

    return ValueParameters(
        value,
        (value, valid) => message({value, valid}),
        error
    );
}
