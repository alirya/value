import Value from "./value";


export default function Standard<V>(value : V) : Value<V>  {

    return {value:value};
}
