import { MutationResolvers } from '../generated/graphqlgen';
import * as authService from '../services/auth.service';
import * as postService from '../services/post.service';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup: (parent, args, ctx) => {
    return authService.signup(parent, args, ctx);
  },

  login: (parent, args, ctx) => {
    return authService.login(parent, args, ctx);
  },

  createDraft: (parent, args, ctx) => {
    return postService.createDraft(parent, args, ctx);
  },

  publish: (parent, args, ctx) => {
    return postService.publish(parent, args, ctx);
  },

  deletePost: (parent, args, ctx) => {
    return postService.deletePost(parent, args, ctx);
  }
};
