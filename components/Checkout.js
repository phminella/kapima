import { useStripe, useElements, Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import nProgress from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client/react';
import { CREATE_ORDER_MUTATION } from '../lib/queries/orderQueries';
import { CURRENT_USER_QUERY } from '../lib/queries/userQueries';
import { useDispatch } from 'react-redux';
import { setShowCart } from '../store/userSlice';
import { useRouter } from 'next/router';

const CheckoutStyle = styled.form`
padding:20px;
p {
color:gray;
font-size:0.8em;
padding-bottom:10px;
span {
    color:#f7145f;
}
}
button {
    margin-top:10px;
    background:#f7145f;
    color:white;
    width:100%;
    border:none;
    padding:10px;
    font-size:1em;
    &.fake-button {
        padding:3px;
        cursor: default;
    img {
        height:28px;
    }
  }
}
.error {
  color:red;
  padding:5px 0;
}
`
const stripePromise = loadStripe("pk_test_51LQsYfKMKJW62reyO9olWAVTBaX8dG47gj29uPhBGXENoDdesY2eBdHoXeq2oDwpRj9IL7o5UNBk94G8rKI9VXL700dfLfezF6");

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [checkout, { data, error: graphQlError }] = useMutation(CREATE_ORDER_MUTATION, {
        refetchQueries: [{ query: CURRENT_USER_QUERY }]
    })
    const handleSubmit = async (e) => {
        e.preventDefault;
        setLoading(true);
        nProgress.start();
        // Stripe Start
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setError(error);
            setLoading(false);
            nProgress.done();
            return;
        }
        const order = await checkout({
            variables: {
                token: paymentMethod.id
            }
        });
        dispatch(setShowCart(false));
        setLoading(false);
        nProgress.done();
        router.push({
            pathname: '/order-complete',
            query: { orderId: order.data.checkout.id}
        });
    }
    return (
        <CheckoutStyle>
            <p><span>4242-4242-4242-4242</span> MM/YY:<span>03/33</span> CVC:<span>333</span> ZIP:<span>33333</span></p>
            <CardElement />
            {error && <p className='error'>&#9940; {error?.message}</p>}
            {graphQlError && <p className='error'>&#9940; {graphQlError?.message}</p>}
            {!loading && <button type='button' onClick={handleSubmit}>Checkout</button>}
            {loading && <button type='button' className='fake-button'><img src="../img/icon-spinner.svg" /></button>}
        </CheckoutStyle>
    );

};

const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default Checkout;