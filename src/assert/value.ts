import Guard from '../boolean/value.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import StringError from './throwable/value.js';
import ValueInterface from '../value.js';


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
