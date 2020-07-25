import Value from "../value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "../message/readonly-merge";
import MessageCallback from "../message/callback";
import Type, {List} from "../value/type/type";
import TypeofFromObject from "../boolean/typeof-from-object";

export default class Typeof<L extends List, Msg>
    extends MergeWrapper<Value<unknown>, Message<Msg>, Validatable>
{
    readonly type : L;

    constructor(
        value : unknown,
        type : L,
        message : Function<[Readonly<Value<unknown> & {type : L} & Validatable>], Msg>,
    ) {

        let container : Value<unknown> & {type : L} = {
            type : type,
            value : value,
        };

        let msg = MessageCallback(container, TypeofFromObject, ()=>message(this));

        super(container, msg, msg);

        this.type = type;
    }
}
