import Message from "../../dist/validator/message";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


let messageSpec = new Message({

        validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, string, Instance<any, string>> {
            return <Return<unknown, Argument, string, Instance<any, string>>> {
                value : value,
                message : "string",
                valid  : typeof value === "string"
            }
        }
    },
    (object) => typeof object.value
);


it("valid", () => {

    let validatable = messageSpec.validate('str');
    expect(validatable.valid).toBeTrue()
    expect(validatable.value).toEqual('str')
    expect(validatable.message).toBe('string')
});



it("invalid", () => {

    let validatable = messageSpec.validate(1);
    expect(validatable.valid).toBeFalse()
    expect(validatable.value).toEqual(1);
    expect(validatable.message).toBe('number')
});


