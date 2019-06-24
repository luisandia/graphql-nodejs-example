import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
    // request.connection is from subscription
    // equest.request. is from http request
    const header = request.request ? request.request.headers.authorization : request.connection.context.Authorization
    if (header) {
        const token = header.replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisisasecret')
        return decoded.userId
    }
    if (requireAuth) {
        throw new Error('Authentication required')
    }
    return null
}

export { getUserId as default }