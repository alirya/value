import { List } from "../value/type/type";
import Value from "../value";
export default function TypeofFromObject<T extends List>(value: Value<unknown> & {
    type: T;
}): boolean;
