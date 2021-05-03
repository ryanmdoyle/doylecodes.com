export const schema = gql`
  type Project {
    id: String!
    title: String!
    description: String!
    technologies: String!
    github: String
    href: String
  }

  type Query {
    projects: [Project!]!
    project(id: String!): Project
  }

  input CreateProjectInput {
    title: String!
    description: String!
    technologies: String!
    github: String
    href: String
  }

  input UpdateProjectInput {
    title: String
    description: String
    technologies: String
    github: String
    href: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: String!, input: UpdateProjectInput!): Project!
    deleteProject(id: String!): Project!
  }
`
