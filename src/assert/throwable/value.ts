import ValueType from "../../boolean/string/value";
import Callback from "@dikac/t-function/assert/throwable/callback";

export default function Value(
    string : unknown,
    value : (
        valid : boolean,
        value : unknown,
    ) => string = ValueType,
    error : (message:string)=>Error = (string : string) => new Error(string)
) : Error {

    return Callback([string], value, error);
}
