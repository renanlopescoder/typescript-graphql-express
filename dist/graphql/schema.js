"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
    {
        id: 1,
        name: 'Stark',
        email: 'tony_stark@marvel.com'
    },
    {
        id: 2,
        name: 'Clark',
        email: 'clark_kent@dc.com'
    }
];
const typeDefs = `
  type User {
    id: ID!,
    name: String!,
    email: String!
  }

  type Query {
    allUsers: [User]!
  }
`;
const resolvers = {
    Query: {
        allUsers: () => users
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
