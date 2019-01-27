import unqiueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

module.exports = { //The object that will be exported when people require our module
all: starWarsNames,
random: unqiueRandomArray(starWarsNames) // To do this we already have a micro library that does this - instead of writing it on our own and then writing tests for it(unqiue-random-array)
};
