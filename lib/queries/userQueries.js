import { gql } from "@apollo/client";


export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
    id
    name
    email
    cart (orderBy: {id : asc}) {
      id
      product  {
        name
        description
        image {
          image {
            publicUrlTransformed
          }
          altText
        }
        price 
      }
      quantity
    }
    cartCount
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
mutation SIGNUP_MUTATION($name:String!,$email:String!, $password:String!) {
     createUser(data: {
        name:$name
        email:$email
        password:$password
    }) {
        id,
        name
    }
}
`

export const QUERY_USEREMAIL = gql`
query QUERY_USEREMAIL($email:String!) {
  user(where: {email:$email}) {
    email
  }
}
`
export const SIGNIN_MUTATION = gql`
mutation SIGNIN_MUTATION($email:String! $password:String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
          cart {
      product {
        name
        description
        image {
          image {
            publicUrlTransformed
          }
          altText
        }
        price 
      }
      quantity
    }
    cartCount
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
  }
}`;

export const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export const REQUEST_RESET_MUTATION = gql`
mutation REQUEST_RESET_MUTATION($email: String!) {
  sendUserPasswordResetLink(email: $email) 
}`;

export const RESET_PASSWORD_MUTATION = gql`
mutation RESET_PASSWORD_MUTATION($email:String!, $token:String!, $password:String!) {
  redeemUserPasswordResetToken(email:$email, token:$token, password:$password) {
    message
  }
}`;