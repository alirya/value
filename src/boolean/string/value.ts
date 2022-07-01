import Value from '../../value';
import Validatable from '@alirya/validatable/validatable';

export function ValueParameters(
    value : unknown,
    valid : boolean,
) : string {

    if(valid) {

        return `value is compatible with Value interface`;

    } else {

        return `value is not compatible with Value interface`;
    }
}

export function ValueParameter(
    {
        value,
        valid,
    } : Value<unknown> & Validatable
) : string {

    return ValueParameters(value, valid);
}

namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
}
export default Value;
