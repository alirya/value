import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "../value";
import Function from "@dikac/t-function/function";
import Type, {List} from "../value/type/type";
import TypeofValidatable from "../validatable/typeof";

export type Return<L extends List, Msg> =
    Validatable<true> & Message<Msg> & Value<Type<L>> & {type : L} |
    Validatable<false> & Message<Msg> & Value<unknown> & {type : L};

export default class Typeof<L extends List = List, Msg = unknown>
    implements
        Validator<unknown, Readonly<Return<L , Msg>>>,
        Message<Function<[Return<L, Msg>], Msg>>
{
    constructor(
        public type : L,
        public message : Function<[Return<L, Msg>], Msg>,
    ) {
    }

    validate(value: unknown): Readonly<Return<L , Msg>> {

        return <Readonly<Return<L , Msg>>> new TypeofValidatable(value, this.type, this.message);
    }
}
