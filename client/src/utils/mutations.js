import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseName: String!) {
    addExercise(exerciseName: $exerciseName) {
      _id
      exerciseName
      weight
      repetitions
      username
      notes
      createdAt
    }
  }
`;

// export const ADD_REACTION = gql`
//   mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
//     addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
//       _id
//       reactionCount
//       reactions {
//         _id
//         reactionBody
//         createdAt
//         username
//       }
//     }
//   }
// `;

// export const ADD_FRIEND = gql`
//   mutation addFriend($id: ID!) {
//     addFriend(friendId: $id) {
//       _id
//       username
//       friendCount
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const REMOVE_FRIEND = gql`
//   mutation removeFriend($id: ID!) {
//     removeFriend(id: $id) {
//       _id
//       username
//       friends {
//         _id
//         username
//       }
//     }
//   }
// `;
