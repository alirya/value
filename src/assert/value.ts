import Guard from "../boolean/value";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/value";
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
    error : Function<[object], Error> = StringError
) : asserts value is ValueInterface {

    Callback(value, Guard, error);
}
