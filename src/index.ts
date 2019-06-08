import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';
import { ContextParameters } from 'graphql-yoga/dist/types';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request: ContextParameters) => ({
    ...request,
    prisma
  })
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
