import Validatable from "@dikac/t-validatable/validatable";
import Value from "../../../value";
import Function from "@dikac/t-function/function";
export default function Valid(object: Validatable & Value, throwable?: Function<[string], Error>): Error;
