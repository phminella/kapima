import { gql } from "@apollo/client";

export const QUERY_PRODUCTS_PERPAGE = gql`
query QUERY_PRODUCTS_PERPAGE($take:Int!, $skip:Int!) {
  products(take:$take skip:$skip) {
      id
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
}`

export const QUERY_PRODUCTS = gql`
query QUERY_PRODUCTS {
    products {
      id
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
  }`

export const SINGLE_PRODUCT_QUERY = gql`
query SINGLE_PRODUCT_QUERY($id: ID!) {
  product(where: { id: $id}) {
      id
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
`
export const QUERY_PRODUCT_COUNT = gql`
query QUERY_PRODUCT_COUNT {
  productsCount
}`
  ;