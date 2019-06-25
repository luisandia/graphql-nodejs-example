import 'cross-fetch/polyfill'
import { gql } from 'apollo-boost'
import prisma from '../src/prisma'
import seedDatabase, { userOne } from './utils/seedDatabase'
import getClient from './utils/getClient'
import { createUser, getUsers, login, getProfile } from './utils/operations'
const client = getClient()
jest.setTimeout(50000)

beforeEach(seedDatabase)

test('Should create a new user', async () => {
    // await beforeEach(seedDatabase);
    const variables = {
        data: {
            name: 'Andrew',
            email: 'andrew4@example.com',
            password: 'MyPass123'
        }
    }
    const response = await client.mutate({
        mutation: createUser,
        variables
    })

    const exists = await prisma.exists.User({ id: response.data.createUser.user.id })
    expect(exists).toBe(true)
})