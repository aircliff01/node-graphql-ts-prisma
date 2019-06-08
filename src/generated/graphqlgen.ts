// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import { Post, User } from './prisma-client';
import { AuthPayload, Context } from '../types';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsPost {
    id: string;
  }

  export type FeedResolver =
    | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
      };

  export type DraftsResolver =
    | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
      };

  export type PostResolver =
    | ((parent: undefined, args: ArgsPost, ctx: Context, info: GraphQLResolveInfo) => Post | null | Promise<Post | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsPost,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Post | null | Promise<Post | null>;
      };

  export type MeResolver =
    | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | null | Promise<User | null>;
      };

  export interface Type {
    feed:
      | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
        };

    drafts:
      | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
        };

    post:
      | ((parent: undefined, args: ArgsPost, ctx: Context, info: GraphQLResolveInfo) => Post | null | Promise<Post | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsPost,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Post | null | Promise<Post | null>;
        };

    me:
      | ((parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | null | Promise<User | null>;
        };
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: (parent: Post) => parent.id,
    published: (parent: Post) => parent.published,
    title: (parent: Post) => parent.title,
    content: (parent: Post) => parent.content
  };

  export type IdResolver =
    | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type PublishedResolver =
    | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => boolean | Promise<boolean>)
    | {
        fragment: string;
        resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
      };

  export type TitleResolver =
    | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type ContentResolver =
    | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type AuthorResolver =
    | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>;
      };

  export interface Type {
    id:
      | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    published:
      | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => boolean | Promise<boolean>)
      | {
          fragment: string;
          resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
        };

    title:
      | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    content:
      | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    author:
      | ((parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (parent: Post, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    name: (parent: User) => parent.name
  };

  export type IdResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type EmailResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type NameResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type PostsResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
      };

  export interface Type {
    id:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    email:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    name:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    posts:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post[] | Promise<Post[]>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    email: string;
    password: string;
    name: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export interface ArgsCreateDraft {
    title: string;
    content: string;
  }

  export interface ArgsPublish {
    id: string;
  }

  export interface ArgsDeletePost {
    id: string;
  }

  export type SignupResolver =
    | ((parent: undefined, args: ArgsSignup, ctx: Context, info: GraphQLResolveInfo) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type LoginResolver =
    | ((parent: undefined, args: ArgsLogin, ctx: Context, info: GraphQLResolveInfo) => AuthPayload | Promise<AuthPayload>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => AuthPayload | Promise<AuthPayload>;
      };

  export type CreateDraftResolver =
    | ((parent: undefined, args: ArgsCreateDraft, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: ArgsCreateDraft, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
      };

  export type PublishResolver =
    | ((parent: undefined, args: ArgsPublish, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: ArgsPublish, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
      };

  export type DeletePostResolver =
    | ((parent: undefined, args: ArgsDeletePost, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
    | {
        fragment: string;
        resolve: (parent: undefined, args: ArgsDeletePost, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
      };

  export interface Type {
    signup:
      | ((parent: undefined, args: ArgsSignup, ctx: Context, info: GraphQLResolveInfo) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    login:
      | ((parent: undefined, args: ArgsLogin, ctx: Context, info: GraphQLResolveInfo) => AuthPayload | Promise<AuthPayload>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLogin,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => AuthPayload | Promise<AuthPayload>;
        };

    createDraft:
      | ((parent: undefined, args: ArgsCreateDraft, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: ArgsCreateDraft, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
        };

    publish:
      | ((parent: undefined, args: ArgsPublish, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: ArgsPublish, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
        };

    deletePost:
      | ((parent: undefined, args: ArgsDeletePost, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>)
      | {
          fragment: string;
          resolve: (parent: undefined, args: ArgsDeletePost, ctx: Context, info: GraphQLResolveInfo) => Post | Promise<Post>;
        };
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    user: (parent: AuthPayload) => parent.user
  };

  export type TokenResolver =
    | ((parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type UserResolver =
    | ((parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>)
    | {
        fragment: string;
        resolve: (parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>;
      };

  export interface Type {
    token:
      | ((parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    user:
      | ((parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>)
      | {
          fragment: string;
          resolve: (parent: AuthPayload, args: {}, ctx: Context, info: GraphQLResolveInfo) => User | Promise<User>;
        };
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {};

  export type FeedSubscriptionResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AsyncIterator<Post | null> | Promise<AsyncIterator<Post | null>>;
    resolve?: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post | null | Promise<Post | null>;
  };

  export interface Type {
    feedSubscription: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AsyncIterator<Post | null> | Promise<AsyncIterator<Post | null>>;
      resolve?: (parent: undefined, args: {}, ctx: Context, info: GraphQLResolveInfo) => Post | null | Promise<Post | null>;
    };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Post: PostResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthPayload: AuthPayloadResolvers.Type;
  Subscription: SubscriptionResolvers.Type;
}

// @ts-ignore
declare module 'graphql-tools' {
  interface IResolvers extends Resolvers {}
}
