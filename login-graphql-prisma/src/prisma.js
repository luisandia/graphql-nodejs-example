import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    fragmentReplacements
})
export { prisma as default }

// generate token running - 'prisma token --copy' in terminal
// in graphql playground add: { "Authorization":"Bearer REPLACE_WITH_TOKEN_GENERATED"}

// prisma.query.users(null, '{id name email posts {id title}}').then((data) => {
//     console.log(data)
// })