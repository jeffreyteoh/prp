export const typeDefs = `
    type  Success {
        success: Boolean
    }

    type  Mutation {
        sendEmail(email: String!, name: String, subject: String, message: String!, token: String!): Success 
    }

`;
