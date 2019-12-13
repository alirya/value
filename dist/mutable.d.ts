import Immutable from "./immutable";
export default interface Mutable<Value> extends Immutable<Value> {
    value: Value;
}
