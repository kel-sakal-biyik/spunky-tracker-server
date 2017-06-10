const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const Schema = `
# Root GraphQL query
type Query {}
`;

module.exports = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
});