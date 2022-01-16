import AssertString from '../assert/value';
import ValueError from '../assert/throwable/value-parameters';
import ValueInterface from '../value';

/**
 * return {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function ValueParameters(
    value : object,
    error : (value:object)=>Error = ValueError
) : ValueInterface {

    AssertString(value, error);

    return value;
}
