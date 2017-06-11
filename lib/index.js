const express = require('express');
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const schema = require('./graphql/schema');
const bodyParser = require('body-parser');

const port = process.env.PORT || '3000';
const app = express();

const cors = require('cors');

app.use('/raspberry-api', bodyParser.json(), cors(), graphqlExpress((req) => {
    return {
        schema: schema,
        formatError: (err) => ({
            message: err.message,
            details: err.stack
        })
    };
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    query: `query raspberryResponse {
    microphone {
        decibel
    }
    location {
        latitude
        longitude
    }
}`
}));

app.listen(port, () => {
    console.log('GraphQL API is listening on port', port, '.');
});

module.exports = app;