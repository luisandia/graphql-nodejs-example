import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'thisismysupersecrettext',
    fragmentReplacements
})
// generate token running - 'prisma token --copy' in terminal
// in graphql playground add: { "Authorization":"Bearer REPLACE_WITH_TOKEN_GENERATED"}
export { prisma as default }

// prisma.query.users(null, '{id name email posts {id title}}').then((data) => {
//     console.log(data)
// })