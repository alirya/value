import ValueInterface from "../value";
import ObjectProperty from "@dikac/t-object/property/boolean/property";

/**
 * check if {@param value} is compatible with {@link ValueInterface}
 */
export default function Value(
    value : object,
) : value is ValueInterface {

    if(!ObjectProperty(value, 'value')) {

        return false;
    }

    return true;

}
