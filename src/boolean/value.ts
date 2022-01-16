import ValueInterface from '../value';
import PropertyExists from '@dikac/t-object/property/boolean/exists';

/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(
    value : object,
) : value is ValueInterface {

    return PropertyExists(value, 'value');

}
