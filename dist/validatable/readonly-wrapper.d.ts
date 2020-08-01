import Value from "../value";
import InferValue from "../value/infer";
import ReadonlyWrapperValidatable from "@dikac/t-validatable/readonly-wrapper";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * read only wrapper for {@link Value} and {@link Validatable}
 */
export default class ReadonlyWrapper<Subject extends Validatable & Value = Validatable & Value> extends ReadonlyWrapperValidatable<Subject> implements Readonly<Value<InferValue<Subject>>> {
    get value(): InferValue<Subject>;
}
