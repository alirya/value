import Function from "@dikac/t-function/function";
import ValueInterface from "../value";
/**
 * assert {@param value} is compatible with {@link ValueInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Value(value: object, error?: Function<[object], Error>): asserts value is ValueInterface;
