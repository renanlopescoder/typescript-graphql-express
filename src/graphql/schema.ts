import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
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
]

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

export default makeExecutableSchema({typeDefs, resolvers});
