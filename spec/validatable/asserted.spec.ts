import Mixin from "../../dist/validatable/mixin";
import StdValue from "../../dist/standard";
import Primitive from "@dikac/t-validatable/primitive";
import Asserted from "../../dist/validatable/asserted";

it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("valid", function() {

    let standard = new Mixin(
        new StdValue(1),
        new Primitive(true),
    );

    let asserted = new Asserted(standard, {message:'msg'});

    it(`value`, () => expect(asserted.value).toBe(1));
    it(`valid`, () => expect(asserted.valid).toBe(true));
    it(`message`, () => expect(asserted.message).toBe('msg'));
});

describe("invalid", function() {

    let standard = new Mixin(
        new StdValue(1),
        new Primitive(false),
    );

    let asserted = new Asserted(standard, {message:'msg'});

    it(`valid`, () => expect(asserted.valid).toBe(false));
    it(`message`, () => expect(asserted.message).toBe('msg'));

    it(`value`, () => {

        try {

            let value = asserted.value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('msg');
        }
    });
});




