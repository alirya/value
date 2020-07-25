import { List } from "../../value/type/type";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "../../value";
export default function Typeof(object: Readonly<Value<unknown> & {
    type: List;
} & Validatable>): string;
