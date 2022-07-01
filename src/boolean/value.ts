import ValueInterface from '../value';
import {ExistsParameters} from '@alirya/object/property/boolean/exists';

/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(
    value : object,
) : value is ValueInterface {

    return ExistsParameters(value, 'value');

}
