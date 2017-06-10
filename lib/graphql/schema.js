const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const Schema = `

# Output from raspberry microphone
type MicOutput {
    decibel: Int    
}

# Root GraphQL query
type Query {
    microphone: MicOutput
}
`;

module.exports = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
});