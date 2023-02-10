import Guard from '../boolean/value.js';
import Callback from '@alirya/function/assert/callback-parameters.js';
import StringError from './throwable/value-parameters.js';
import ValueInterface from '../value';


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
