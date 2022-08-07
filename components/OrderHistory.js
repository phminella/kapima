import { useQuery } from '@apollo/client/react/hooks';
import { QUERY_ORDERS } from '../lib/queries/orderQueries';
import OrderHistoryItem from './OrderHistoryItem';
import styled from "styled-components";
import Link from 'next/link';

export const OrderHistoryStyle = styled.section`
background:white;
min-width:800px;
min-height:400px;
padding:20px;
@media screen and (max-width: 860px) { 
margin-top:35px;
min-width:0;
width:100vw;
}
h1 {
    font-weight: bold;
    margin-bottom:20px;
    a {
        font-size:1.5rem;        
        float:right;
    }
}
a {
    color:#f7145f;
    text-decoration: underline;
}
`
const OrderHistory = ({ userId }) => {
    const { data, loading, error } = useQuery(QUERY_ORDERS, {
        variables: {
            userId: userId
        }
    });
    console.log(data);
    if (loading) return <p><img width={50}src="../img/icon-spinner.svg" /></p>;
    return (
        <OrderHistoryStyle>
            <h1>Order History <Link href="/">Back to shopping!</Link></h1>
            {data.length===0 && <><p>You still haven't made your first purchase!</p>
                <Link href="/">Lets change this!</Link></>
            }
            <ul>
                {data.orders.map((order) =>
                    <OrderHistoryItem key={order.id} order={order} />)}
            </ul >
        </OrderHistoryStyle>
    )
}

export default OrderHistory;