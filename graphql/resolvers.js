export const resolvers = {
  Query: {
    companies: (_parent, _args, ctx) => ctx.prisma.company.findMany(),
  },
};
