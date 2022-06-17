const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    # friendCount: Int
    exercises: [Exercise]
    # friends: [User]
  }

  type Exercise {
    _id: ID
    exerciseName: String
    weight: Int
    repetitions: Int
    username: String
    notes: String
    createdAt: String
  }

  # type Reaction {
  #   _id: ID
  #   reactionBody: String
  #   createdAt: String
  #   username: String
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises(username: String): [Exercise]
    exercise(_id: ID!): Exercise
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExercise(exerciseName: String!): Exercise
    # addReaction(thoughtId: ID!, reactionBody: String!): Thought
    # addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
