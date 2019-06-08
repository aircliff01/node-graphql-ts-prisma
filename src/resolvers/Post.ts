import { PostResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

export const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,

  author: ({ id }, args, ctx: Context) => {
    return ctx.prisma.post({ id }).author();
  }
};
