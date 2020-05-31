import Standard from "../dist/standard";
import Wrapper from "../dist/wrapper";

it("force console log", () => spyOn(console, 'log').and.callThrough());


describe("test", function() {

    let standard = new Standard(1);
    let wrapped = new Wrapper(standard);

    it(`number`, () => expect(wrapped.value).toBe(1));
});




