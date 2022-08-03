import { gql } from "@apollo/client";

export const ADD_TO_CART_MUTATION = gql`
mutation ADD_TO_CART_MUTATION($productId: ID!) {
  addToCart(productId: $productId) {
    id
    quantity
  }
}
`
export const DELETE_FROM_CART_MUTATION = gql`
mutation DELETE_FROM_CART_MUTATION($productId: ID!) {
  deleteCartItem(
    where: {id: $productId}
  ) {
    quantity
  }
}`

export const UPDATE_CART_MUTATION = gql`
mutation UPDATE_CART_MUTATION($id:ID!, $quantity:Int!) {
  updateCartItem(
    where: { id: $id }
    data: { quantity: $quantity }
  ) {
    id
  }
}
`