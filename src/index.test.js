import starWars from './index';
import {expect} from 'chai';

describe('starwars-names', () => {
   
    describe('all', () => {
        it('should be an array of strings', () => {
            const isArrayOfStrings = (array) => array.every(item => typeof item === 'string')
            expect(starWars.all).to.satisfy(isArrayOfStrings);
        })
        it('should contain Luke Skywalker', () => {
            expect(starWars.all).to.include('Luke Skywalker');
        })
    });

    describe('random', () => {
        it('should return a random item from statwars.all', () => {
            let randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
    })

})