const casual = require('casual');

module.exports = {
    Query: {
        microphone: () => {
            return {
               decibel: casual.integer(from = 50, to = 100)
            }
        }
    }
};