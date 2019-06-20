import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
    secret: 'thisismysupersecrettext',
    fragmentReplacements
})

export { prisma as default }

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.query.users(null, '{id name posts {id title}}').then((data) => {
//     console.log(data)
// })

// prisma.query.comments(null, '{id text author {id name}}').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// })

// prisma.mutation.createPost({
//     data: {
//         title: 'My graphql post',
//         body: 'you can found a example here',
//         published: true,
//         author: {
//             connect: {
//                 id: "cjx4sxafe005i0838vndj86re"
//             }
//         }
//     }
// }, '{id title body published}').then(data => {
//     console.log(data)
//     return prisma.query.users(null, '{id name posts {id title }}')
// }).then(data => {
//     console.log(JSON.stringify(data, undefined, 2))
// });

// prisma.mutation.updatePost({
//     where: {
//         id: "cjx4xoe8r0029076209k935mw",

//     }, data: {
//         title: 'My graphql post new here',
//         body: 'you can found a example on this site',
//         published: true
//     }
// }, '{id}').then(data => {
//     return prisma.query.posts(null, '{ id title body published}')
// }).then(data => {
//     console.log(data)
// })

// with async await

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId })

//     if (!userExists) {
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published } } }')

//     return post.author
// }

// createPostForUser('cjx4sxafe005i0838vndj86re', {
//     title: 'Great books to read',
//     body: 'The War of Art',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error.message)
// })

const updatePostForUser = async (postId, data) => {
    const postExists = await prisma.exists.Post({ id: postId })

    if (!postExists) {
        throw new Error('Post not found')
    }

    const post = await prisma.mutation.updatePost({
        where: {
            id: postId
        },
        data
    }, '{ author { id name email posts { id title published } } }')

    return post.author
}

updatePostForUser("cjx4xoe8r0029076209k935mw", { published: true }).then((user) => {
    console.log(JSON.stringify(user, undefined, 2))
}).catch((error) => {
    console.log(error.message)
})


// check if exists

prisma.exists.Comment({
    id: '123'
}).then(exists => {
    console.log(exists)
});