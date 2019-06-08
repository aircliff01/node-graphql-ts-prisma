import { User, Prisma } from './generated/prisma-client';
import { ContextParameters } from 'graphql-yoga/dist/types';

export interface Context extends ContextParameters {
  prisma: Prisma;
}

export interface AuthPayload {
  token: string;
  user: User;
}
