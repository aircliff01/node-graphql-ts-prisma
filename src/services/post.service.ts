import { MutationResolvers } from '../generated/graphqlgen';
import { getUserId } from '../utils';
import { Post, PostPromise } from '../generated/prisma-client';
import { Context } from '../types';

export function createDraft(parent: any, { title, content }: MutationResolvers.ArgsCreateDraft, ctx: Context): PostPromise {
  const userId = getUserId(ctx);
  return ctx.prisma.createPost({
    title,
    content,
    author: {
      connect: { id: userId }
    }
  });
}

export async function publish(parent: any, { id }: MutationResolvers.ArgsPublish, ctx: Context) {
  const userId = getUserId(ctx);
  const postExists = await ctx.prisma.$exists.post({
    id,
    author: { id: userId }
  });
  if (!postExists) {
    throw new Error(`Post not found or you're not the author`);
  }

  return ctx.prisma.updatePost({
    where: { id },
    data: { published: true }
  });
}

export async function deletePost(parent: any, { id }: MutationResolvers.ArgsDeletePost, ctx: Context) {
  const userId = getUserId(ctx);
  const postExists = await ctx.prisma.$exists.post({
    id,
    author: { id: userId }
  });
  if (!postExists) {
    throw new Error(`Post not found or you're not the author`);
  }

  return ctx.prisma.deletePost({ id });
}
