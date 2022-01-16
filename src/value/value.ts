import Infer from './infer';
import Value from '../value';

/**
 * get {@link Value.value} value
 *
 * @param value
 * object to be extracted
 */
export default function Value<ValueTemplate extends Value>(value : ValueTemplate) : Infer<ValueTemplate> {

    return <Infer<ValueTemplate>> value.value;
}
