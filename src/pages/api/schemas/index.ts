export const typeDefs = `
    type  User {
        id: ID
        login: String
        avatar_url: String
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }

    type  Success {
        success: Boolean
    }

    type  Mutation {
        sendEmail(email: String!, name: String, subject: String, message: String!, token: String): Success 
    }

`;
