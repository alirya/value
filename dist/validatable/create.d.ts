import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";
export default function Create<ValueT, Valid extends boolean>(value: ValueT, valid: Valid): Validatable<Valid> & Value<ValueT>;
