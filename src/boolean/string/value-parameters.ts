export default function ValueParameters(
    value : unknown,
    valid : boolean,
) : string {

    if(valid) {

        return `value is compatible with Value interface`;

    } else {

        return `value is not compatible with Value interface`;
    }
}
