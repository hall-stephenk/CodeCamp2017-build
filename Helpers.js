'use strict';

module.exports = {
    phraseAtRandom: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
};
