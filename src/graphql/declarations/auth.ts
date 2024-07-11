import { graphql } from "../generated";

export const AuthenticateUserWithPassword = graphql(`
  mutation AuthenticateUserWithPassword(
    $email: String!
    $adminPassword: String!
  ) {
    authenticateUserWithPassword(email: $email, adminPassword: $adminPassword) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
          displayName
        }
      }
    }
  }
`);

export const User = graphql(`
  query User {
    authenticatedItem {
      ... on User {
        id
        name
        lastName
        displayName
        email
        role
        createdAt
        groupsCount
      }
    }
  }
`);
