import Guard from "../boolean/value";
import Callback from "@dikac/t-function/assert/callback-parameters";
import StringError from "./throwable/value-parameters";
import ValueInterface from "../value";


/**
 * assert {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Value(
    value : object,
    error : (value:object)=>Error = StringError
) : asserts value is ValueInterface {

    Callback(value, Guard, error);
}
