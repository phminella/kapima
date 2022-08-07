/* eslint-disable react/prop-types */
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { SINGLE_PRODUCT_QUERY } from "../lib/queries/productQueries";
import { SingleProductStyle } from "./styles/SingleProductStyle";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART_MUTATION } from "../lib/queries/cartQueries";
import useUser from "./User";
import { useRouter } from "next/router";
import { useState } from "react";

const SingleProduct = ({ id }) => {
  const router = useRouter();
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });
  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    update(cache, result) {
      //@ts-ignore
      cache.evict(cache.identify(result.data.addToCart));
    },
  });
  const { getUser } = useUser();
  //
  // Animation test
  //
  const [animation, setAnimation] = useState(false);
  const startAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 700);
  };
  const addProductToCart = async () => {
    if (!getUser()) {
      router.push("/sign-in");
    } else {
      startAnimation();
      await addToCart({
        variables: {
          productId: product.id,
        },
      });
    }
  };
  if (loading)
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          <img width={150} src="../img/icon-spinner.svg" />
        </p>
      </div>
    );
  const product = data.product;
  return (
    <SingleProductStyle>
      <Head>
        <title>Capybara Market / {product.name}</title>
      </Head>
      <button className="close-product-button" onClick={() => router.back()}>
        &#10006;
      </button>
      <div className="product-image">
        <img
          src={product.image[0].image.publicUrlTransformed}
          alt={product.image[0].altText}
        />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <img width={150} src="/img/mockup-ratings.png" />
        <h3>${product.price}</h3>
        <img width={120} src="/img/mockup-icons.png" />
        <div className="product-button">
          <button
            type="button"
            className={animation ? "button-animation" : ""}
            onClick={addProductToCart}
          >
            Add to Cart &#127817;
          </button>
        </div>
      </div>
    </SingleProductStyle>
  );
};
export default SingleProduct;
