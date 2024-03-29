import '@babel/polyfill/noConflict'
import server from './server'

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
