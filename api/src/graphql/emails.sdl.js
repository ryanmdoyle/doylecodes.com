export const schema = gql`
  type Email {
    id: String!
    name: String!
    email: String!
    subject: String!
    content: String!
  }

  type Query {
    emails: [Email!]!
    email(id: String!): Email
  }

  input CreateEmailInput {
    name: String!
    email: String!
    subject: String!
    content: String!
  }

  input UpdateEmailInput {
    name: String
    email: String
    subject: String
    content: String
  }

  type Mutation {
    createEmail(input: CreateEmailInput!): Email!
    updateEmail(id: String!, input: UpdateEmailInput!): Email!
    deleteEmail(id: String!): Email!
  }
`
