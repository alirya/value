import Type, {List} from "../value/type/type";
import Value from "../value";
import Typeof from "./typeof";


export default function TypeofFromObject<T extends List>(value : Value<unknown> & {type : T}) : boolean {

    return Typeof(value.value, value.type);
}
