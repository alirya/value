import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
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
