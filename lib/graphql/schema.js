const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const Schema = `

# Output from raspberry microphone
type MicOutput {
    decibel: Int    
}

# Output from gps collar
type GpsOutput {
    latitude: Float
    longitude: Float
}

# Root GraphQL query
type Query {
    microphone: MicOutput
    location: GpsOutput
}
`;

module.exports = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
});