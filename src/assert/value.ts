import Guard from '../boolean/value';
import {CallbackParameters} from '@alirya/function/assert/callback';
import StringError from './throwable/value';
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
    error : (value:object)=>Error = StringError.Parameters
) : asserts value is ValueInterface {

    CallbackParameters(value, Guard, error);
}
