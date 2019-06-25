'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _prismaBinding = require('prisma-binding');

var _index = require('./resolvers/index');

var prisma = new _prismaBinding.Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    fragmentReplacements: _index.fragmentReplacements
});
exports.default = prisma;

// generate token running - 'prisma token --copy' in terminal
// in graphql playground add: { "Authorization":"Bearer REPLACE_WITH_TOKEN_GENERATED"}

// prisma.query.users(null, '{id name email posts {id title}}').then((data) => {
//     console.log(data)
// })