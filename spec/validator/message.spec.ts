import Message from "../../dist/validator/message";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


let messageSpec = new Message({

        validate(value: unknown) {
            return {
                value : value,
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


