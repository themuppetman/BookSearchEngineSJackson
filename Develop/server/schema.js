const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getSingleUser(id: ID, username: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    deleteBook(bookId: ID!): User
  }

  type User {
    id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Auth {
    token: String
    user: User
  }

  input BookInput {
    bookId: ID!
    title: String!
    authors: [String]
  }

  type Book {
    bookId: ID!
    title: String!
    authors: [String]
  }
`;

module.exports = typeDefs;
