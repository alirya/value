import Mixin from "../../dist/validatable/mixin";
import StdValue from "../../dist/standard";
import Primitive from "@dikac/t-validatable/primitive";

it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("mixin", function() {

    let standard = new Mixin(
        new StdValue(1),
        new Primitive(true),
    );

    it(`value`, () => expect(standard.value).toBe(1));
    it(`valid`, () => expect(standard.valid).toBe(true));
});




