import { UserResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  posts: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).posts();
  }
};
