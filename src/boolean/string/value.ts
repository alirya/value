export default function Value(
    valid : boolean,
    value : unknown,
) : string {

    if(valid) {

        return `value is compatible with Value interface`;

    } else {

        return `value is not compatible with Value interface`;
    }
}
