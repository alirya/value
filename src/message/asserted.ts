import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/infer/value";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import ThrowableMessage from "@dikac/t-message/throwable/messsage";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    Instance extends Validatable & Value & Message = Validatable & Value & Message
> extends ReadonlyWrapper<
    Instance
> {

    /**
     * @param subject
     * @param error
     */
    constructor(
        subject : Instance,
        public error : Function<[Instance], Error> = ThrowableMessage
    ) {

        super(subject);
    }

    get value() : ValueInfer<Instance> {

        if(!this.valid) {

            throw this.error(this.subject);
        }

        return <ValueInfer<Instance>> this.subject.value;
    }
}
