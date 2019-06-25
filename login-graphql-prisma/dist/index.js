'use strict';

require('@babel/polyfill/noConflict');

var _graphqlYoga = require('graphql-yoga');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _index = require('./resolvers/index');

var _prisma = require('./prisma');

var _prisma2 = _interopRequireDefault(_prisma);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubsub = new _graphqlYoga.PubSub();

var server = new _graphqlYoga.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: _index.resolvers,
    context: function context(request) {
        return {
            db: _db2.default,
            pubsub: pubsub,
            prisma: _prisma2.default,
            request: request
        };
    },

    fragmentReplacements: _index.fragmentReplacements
});

server.start({ port: process.env.PORT || 4000 }, function () {
    console.log('The server is up!');
});

//to generate prod.env run:
//cd prisma
//prisma login
//prisma deploy -e ../config/prod.env
//in terminal select your production database
//chose name of your service: e.g login-graphql-app
//chose stage: e.g prod
//copy endpoint generate in prisma.yml and copy to prod.env
//everytime you want to deploy use  prisma deploy -e ../config/dev.env