import Value from "./value";

/**
 * create {@link Value} form {@param value}
 */
export default function Standard<V>(value : V) : Value<V>  {

    return {value:value};
}
