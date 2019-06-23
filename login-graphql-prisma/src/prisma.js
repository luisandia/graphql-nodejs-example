import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'thisismysupersecrettext',
    fragmentReplacements
})

export { prisma as default }

// prisma.query.users(null, '{id name email posts {id title}}').then((data) => {
//     console.log(data)
// })