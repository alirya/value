import ValueType from "../../boolean/string/value-parameters";
import Callback from "@dikac/t-function/assert/throwable/callback-parameters";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";

export default function ValueParameters(
    value : unknown,
    message : Dynamic<unknown, string> = ValueType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([value], message, error);
}
