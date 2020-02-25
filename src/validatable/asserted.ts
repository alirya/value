import Validatable from "@dikac/t-validatable/validatable";
import ValueInterface from "@dikac/t-value/value";
import Wrapper from "@dikac/t-validatable/wrapper";
import Message from "@dikac/t-message/message";

export default class Asserted<Val, Valid extends Validatable & ValueInterface<Val>> extends Wrapper<Valid>  implements Readonly<Message<string>>, Readonly<ValueInterface<Val>>{

    constructor(
        validatable : Valid,
        public messageContainer : Message<string>,
        public exception : (message : string) => Error = (message : string) => new Error(message)

    ) {
        super(validatable);
    }

    get message () : string {

        return this.messageContainer.message;
    }


    get value() : Val {

        if(!this.validatable.valid) {

            throw this.exception(this.message);
        }

        return this.validatable.value;
    }
}
