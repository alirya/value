import Standard from "../dist/standard";

it("force console log", () => spyOn(console, 'log').and.callThrough());


describe("constructor", function() {

    let standard = Standard(1);

    it(`number`, () => expect(standard.value).toBe(1));
});

describe("set", function() {

    let standard = Standard(1);
    standard.value = 10;

    it(`number`, () => expect(standard.value).toBe(10));
});


describe("compiler compatible", function() {

    describe("number", function() {

        let standard = Standard(1);

        function accept(value : number) {

            it(`type`, () => expect(typeof value).toBe("number"));
        }

        accept(standard.value);

    });

    describe("string", function() {

        let standard = Standard('string');

        function accept(value : string) {

            it(`type`, () => expect(typeof value).toBe("string"));
        }

        accept(standard.value);

    });
});




