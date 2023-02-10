import ValueInterface from '../value';
import Value from '../value';
import ValueParameters from './value-parameters.js';

/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameter(
    {
        value,
        error,
    } : Value<object> & {error : (value:object)=>Error}
) : ValueInterface {

    return ValueParameters(value, error);
}
