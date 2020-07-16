import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function Create<Val, Valid extends boolean>(value: Val, valid: Valid): Validatable<Valid> & Value<Val>;
