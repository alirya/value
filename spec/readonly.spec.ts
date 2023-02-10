import Readonly from '../dist/readonly.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());


describe('constructor', function() {

    const standard = {value:1};
    const wrapped = new Readonly(standard);

    it(`number`, () => expect(wrapped.value).toBe(1));
});


describe('set', function() {

    const standard = {value:1};
    const wrapped = new Readonly(standard);


    it(`subject value`, () => {
        standard.value = 10;
        expect(wrapped.value).toBe(10);
    });

    it(`subject`, () => {
        wrapped.subject = {value:20};
        expect(wrapped.value).toBe(20);
    });
});




