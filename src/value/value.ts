import Infer from './infer.js';
import Value from '../value.js';

/**
 * get {@link Value.value} value
 *
 * @param value
 * object to be extracted
 */
export default function Value<ValueTemplate extends Value>(value : ValueTemplate) : Infer<ValueTemplate> {

    return <Infer<ValueTemplate>> value.value;
}
