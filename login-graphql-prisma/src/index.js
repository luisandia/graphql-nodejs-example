import '@babel/polyfill/noConflict'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import { resolvers, fragmentReplacements } from './resolvers/index'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(request) {
        return {
            db,
            pubsub,
            prisma,
            request
        }
    },
    fragmentReplacements
})

server.start({ port: process.env.PORT || 4000 }, () => {
    console.log('The server is up!')
})


//to generate prod.env run:
//cd prisma
//prisma login
//prisma deploy -e ../config/prod.env
//in terminal select your production database
//chose name of your service: e.g login-graphql-app
//chose stage: e.g prod
//copy endpoint generate in prisma.yml and copy to prod.env
//everytime you want to deploy use  prisma deploy -e ../config/dev.env
