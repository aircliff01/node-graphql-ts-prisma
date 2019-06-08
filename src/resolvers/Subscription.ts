import { SubscriptionResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,

  feedSubscription: {
    subscribe: async (parent, args, ctx: Context) => {
      return ctx.prisma.$subscribe
        .post({
          mutation_in: ['CREATED', 'UPDATED']
        })
        .node();
    },
    resolve: (payload) => {
      return payload;
    }
  }
};
