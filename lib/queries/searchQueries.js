import { gql } from "@apollo/client";

export const SEARCH_PRODUCTS_QUERY = gql`
query SEARCH_PRODUCTS_QUERY($searchInput: String!) {
  products(
    where: {
      OR: [
        { name: { mode: insensitive, contains: $searchInput } }
        { description: { mode: insensitive, contains: $searchInput } }
      ]
    }
  ) {
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