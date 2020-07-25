import {List} from "../../value/type/type";

export default function Typeof(
    valid : boolean,
    value : unknown,
    type : List
) : string {

    if(valid) {

        return `value is type of ${type}`;

    } else {

        return `value is not type of ${type}`;
    }
}
