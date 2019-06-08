import { MutationResolvers } from '../generated/graphqlgen';
import { AuthPayload, Context } from '../types';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export async function signup(parent: any, args: MutationResolvers.ArgsSignup, ctx: Context): Promise<AuthPayload> {
  const password = await bcrypt.hash(args.password, 10);
  const user = await ctx.prisma.createUser({ ...args, password });

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user
  };
}

export async function login(
  parent: any,
  { email, password }: MutationResolvers.ArgsLogin,
  ctx: Context
): Promise<AuthPayload> {
  const user = await ctx.prisma.user({ email });
  if (!user) {
    throw new Error(`No such user found for email: ${email}`);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user
  };
}
