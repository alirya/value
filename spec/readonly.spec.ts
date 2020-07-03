import Readonly from "../dist/readonly";

it("enable console log", () => spyOn(console, 'log').and.callThrough());


describe("constructor", function() {

    let standard = {value:1};
    let wrapped = new Readonly(standard);

    it(`number`, () => expect(wrapped.value).toBe(1));
});


describe("set", function() {

    let standard = {value:1};
    let wrapped = new Readonly(standard);


    it(`subject value`, () => {
        standard.value = 10;
        expect(wrapped.value).toBe(10)
    });

    it(`subject`, () => {
        wrapped.subject = {value:20};
        expect(wrapped.value).toBe(20)
    });
});




