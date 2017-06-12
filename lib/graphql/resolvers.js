const casual = require('casual');

module.exports = {
    Query: {
        microphone: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        decibel: casual.integer(from = 50, to = 100)
                    });
                }, casual.integer(from = 0, to = 3000));
            });
        },
        location: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        latitude: casual.latitude,
                        longitude: casual.longitude
                    });
                }, casual.integer(from = 0, to = 3000));
            });
        }
    }
};