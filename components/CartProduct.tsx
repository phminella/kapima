import { CartProductStyle } from './styles/CartProductStyle';
import { useMutation } from "@apollo/client";
import { DELETE_FROM_CART_MUTATION, UPDATE_CART_MUTATION } from "../lib/queries/cartQueries";
import { CURRENT_USER_QUERY } from '../lib/queries/userQueries';
import { useEffect, useState } from "react";
interface CartProduct {
    product: Product,
    id: string,
    quantity: number
}
interface Product {
    id: string,
    name: string
    description: string
    price: number
    image: Image[]
}

interface Image {
    image: Image2
    altText: string
}

interface Image2 {
    publicUrlTransformed: string
}


const CartProduct = ({ cartProduct }: { cartProduct: CartProduct }) => {
    const cartProductQuantity = cartProduct.quantity;
    const [quantity, setQuantity] = useState(cartProductQuantity);
    useEffect(() => { setQuantity(cartProductQuantity) }, [cartProductQuantity]);
    const [deleteFromCart] = useMutation(DELETE_FROM_CART_MUTATION, {
        variables: {
            productId: cartProduct.id
        },
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    const [updateCart, { loading }] = useMutation(UPDATE_CART_MUTATION, {
        variables: {
            id: cartProduct.id,
            quantity
        },
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    useEffect(() => { updateCart() }, [quantity]);
    const deleteProductFromCart = async () => {
        await deleteFromCart();
    }
    const quantityChangeHandler = async (e, operation?: string) => {
        if (!e.target.value && operation === "increment") {
            setQuantity(quantity + 1);
        }
        else if (!e.target.value && operation === "decrement") {
            if (quantity === 1) {
                await deleteFromCart();
            }
            else {
                setQuantity(quantity - 1);
            }
        }
        else {
            setQuantity(parseInt(e.target.value));
        }
    }
    return (<CartProductStyle>
        <img src={cartProduct.product.image[0].image.publicUrlTransformed}/>
        <div className="cart-product-details">
            <h4>{cartProduct.product.name}</h4>
            <div className="cart-product-price">
                <p>${`${cartProduct.product.price} x ${quantity}`} </p>
                <p className='cart-product-total-price'>${cartProduct.product.price * quantity}</p>
            </div>
        </div>
        <div className='cart-product-functions'>
            <div className="update-quantity">
                <button onClick={(e) => quantityChangeHandler(e, "decrement")} type='button' disabled={loading}>-</button>
                <input value={quantity} type="text" onChange={(e) => quantityChangeHandler(e, "")} />
                <button onClick={(e) => quantityChangeHandler(e, "increment")} type='button' disabled={loading}>+</button>
            </div>
            <button className='remove-button' type="button" onClick={deleteProductFromCart}>Delete</button>
        </div>
    </CartProductStyle>)
}
export default CartProduct;