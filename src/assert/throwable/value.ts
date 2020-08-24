import ValueType from "../../boolean/string/value";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/throwable/callback";


export default function Value(
    string : unknown,
    value : Function<[boolean, unknown], string> = ValueType,
    error : Function<[string], Error> = (string : string) => new Error(string)
) : Error {

    return Callback([string], value, error);
}
