import { ProductStyle } from './styles/ProductStyle';
import { useMutation } from "@apollo/client";
import { ADD_TO_CART_MUTATION } from "../lib/queries/cartQueries";
import Link from '../node_modules/next/link.js';
import useUser from './User';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Product {
    id: string
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

const Product = ({ product }: { product: Product }) => {
    const router = useRouter();
    const [animation, setAnimation] = useState(false);
    const [addToCart, { data, loading, error }] = useMutation(ADD_TO_CART_MUTATION, {
        variables: {
            productId: product.id
        },
        update(cache, result) {
            //@ts-ignore
            cache.evict(cache.identify(result.data.addToCart));
        }
    });
    const { getUser } = useUser();
    const startAnimation = () => {
        setAnimation(true);
        setTimeout(() => {
            setAnimation(false)
        }, 700);
    }
    const addProductToCart = async () => {
        if (!getUser()) {
            router.push('/sign-in')
        }
        else {
            await addToCart();
            startAnimation();
        }
    }
    return (<ProductStyle>
        <div>
            {product.image.map((img: Image) => <img key={img.altText} height={150} src={img.image.publicUrlTransformed} alt={img.altText} />)}
            <Link href={`/product/${product.id}`}><h3>{product.name}</h3></Link>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button type='button' className={animation ? "button-animation" : ""} onClick={(addProductToCart)}>Add to Cart &#127817;</button>
        </div>
    </ProductStyle>)
}
export default Product;