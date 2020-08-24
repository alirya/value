import ValueInterface from "../value";
/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(value: object): value is ValueInterface;
