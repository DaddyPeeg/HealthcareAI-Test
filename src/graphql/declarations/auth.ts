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
          displayName
          email
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
