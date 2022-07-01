import AssertString from '../assert/value';
import ValueError from '../assert/throwable/value';
import ValueInterface from '../value';
import Value from '../value';

/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export function ValueParameters(
    value : object,
    error : (value:object)=>Error = ValueError.Parameters
) : ValueInterface {

    AssertString(value, error);

    return value;
}

export interface ValueArgument extends Value<object> {
    error : (value:object)=>Error;
}

/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export function ValueParameter(
    {
        value,
        error,
    } : ValueArgument
) : ValueInterface {

    return ValueParameters(value, error);
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
    export type Argument = ValueArgument;
}
export default Value;
