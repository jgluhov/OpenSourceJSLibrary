var uniqueRandomArray = require('unique-random-array'),
    starWarsNames = require('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};