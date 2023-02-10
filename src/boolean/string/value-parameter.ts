import Value from '../../value';
import Validatable from '@alirya/validatable/validatable';
import ValueParameters from './value-parameters.js';

export default function ValueParameter(
    {
        value,
        valid,
    } : Value<unknown> & Validatable
) : string {

    return ValueParameters(value, valid);
}
