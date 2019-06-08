import { AuthPayload } from './AuthPayload';
import { Query } from './Query';
import { Post } from './Post';
import { User } from './User';
import { Mutation } from './Mutation';
import { Subscription } from './Subscription';
import { Resolvers } from '../generated/graphqlgen';

export const resolvers: Resolvers = {
  Query,
  Post,
  User,
  Mutation,
  AuthPayload,
  Subscription
};
