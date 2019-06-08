import { getUserId } from '../utils';
import { QueryResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  feed(parent, args, ctx: Context) {
    return ctx.prisma.posts({ where: { published: true } });
  },

  drafts(parent, args, ctx: Context) {
    const id = getUserId(ctx);

    const where = {
      published: false,
      author: {
        id
      }
    };

    return ctx.prisma.posts({ where });
  },

  post(parent, { id }, ctx: Context) {
    return ctx.prisma.post({ id });
  },

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  }
};
