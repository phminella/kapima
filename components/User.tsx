import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../lib/queries/userQueries';

export interface User {
  id: string
  name: string
  email: string
  cart: Cart[]
  cartCount: number
}

export interface Cart {
  product: Product
  quantity: number
}

export interface Product {
  name: string
  description: string
  image: Image[]
  price: number
}

export interface Image {
  image: Image2
  altText: string
}

export interface Image2 {
  publicUrlTransformed: string
}


const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const user: User = data?.authenticatedItem;
  const getUser = () => {
    return user;
  }
  const getCart = () => {
    return user?.cart;
  }
  const getCartCount = () => {
    return user?.cart.reduce((total, cartProduct) => {
      return total + cartProduct.quantity;
    }, 0)
  }
  const getCartTotal = () => {
    return user.cart.reduce((total, cartProduct) => {
      return total + (cartProduct.quantity * cartProduct.product.price);
    }, 0)
  }
  return { getUser, getCart, getCartCount, getCartTotal }
};

export default useUser;