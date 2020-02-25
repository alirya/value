import Standard from "../dist/standard";

it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("test", function() {

    let standard = new Standard(1);

    it(`number`, () => expect(new Standard(1).value).toBe(1));
});




