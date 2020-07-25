import {List} from "../../value/type/type";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "../../value";
import TypeofString from "../../boolean/string/typeof";

export default function Typeof(
    object : Readonly<Value<unknown> & {type : List} & Validatable>
) : string {

    return TypeofString(object.valid, object.value, object.type);
}
