import { gql } from "@apollo/client";

export const QUERY_ORDER = gql`
query QUERY_ORDER($id:ID!) {
  order(where: {id:$id}) {
    id
    brand
    last4
    exp
    total
    products {
      name
      description
      price
      quantity      
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
}`

export const QUERY_ORDERS = gql`
query QUERY_ORDERS($userId:ID!) {
  orders(where: {user: {id:{ equals:$userId}}})  {
    id
    total
    createdAt
    products {
      name
      description
      price
      quantity      
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
    user {
      name
    }
  }
}`

export const CREATE_ORDER_MUTATION = gql`
mutation CREATE_ORDER_MUTATION($token: String!) {
  checkout(token:$token) {
    id
    charge
    total
    products {
        name
        description
        price
        image {
          image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
}
`