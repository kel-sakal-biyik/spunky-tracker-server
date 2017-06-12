const casual = require('casual');

const playCount = {
    noBarking: 0,
    goToBed: 0
};

module.exports = {
    Query: {
        microphone: () => {
            return {
               decibel: casual.integer(from = 50, to = 100)
            }
        },
        location: () => {
            return {
                latitude: casual.latitude,
                longitude: casual.longitude
            }
        }
    },
    Mutation: {
        countPlay: (_, { playType }) => {
            playCount[playType]++;

            return {
                value: playCount[playType]
            };
        }
    }
};