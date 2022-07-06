import {CallbackParameter} from '../dist/callback.js';
import Argument from '@alirya/function/argument/argument.js';
import Callback from '@alirya/function/callback/callback.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('basic', function() {

    let fn = function (number : number) {

        return number + number;
    };

    let argument : Callback<(n:number)=>number> & Argument<[number]> = {callback:fn, argument:[1]};
    let callback = new CallbackParameter(argument);

    it('validate initial data', function () {

        expect(argument.argument).toEqual([1]);
        expect(argument.callback).toEqual(fn);

    });

    it('validate value', function () {

        expect(callback.value).toEqual(2);

    });

    it('change argument', function () {

        argument.argument = [2];
        expect(argument.argument).toEqual([2]);

    });

    it('validate value', function () {

        expect(callback.value).toEqual(4);

    });
});
