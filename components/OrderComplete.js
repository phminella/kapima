import { OrderCompleteStyle } from './styles/OrderCompleteStyle';
import { useQuery } from '@apollo/client/react/hooks';
import { QUERY_ORDER } from '../lib/queries/orderQueries';
import OrderProducts from './OrderProducts';
import Link from 'next/link';

const OrderComplete = ({ orderId }) => {
    const { data, loading, error } = useQuery(QUERY_ORDER, {
        variables: {
            id: orderId
        }
    })
    console.log(data);
    if (loading || !data) return <p>you should not be here.</p>
    return (
        <OrderCompleteStyle>
            <h1>Completed order<Link href="/">Back to shopping!</Link></h1>
            <p><b>Order Number:</b> {orderId}</p>
            <div className='order-details'>
                <ul>
                    {/* Payment Method */}
                    <li className="order-complete-details cc-details">
                        <p>Payment Method: <img height={30} src={`img/cc/icon-${data.order.brand}.svg`} />
                           last 4 digits:<span>{data.order.last4}</span> until <span>{data.order.exp}</span> </p>
                    </li>
                    {/* Order Products */}
                    <li className="order-complete-details">
                        <ul>
                            {data?.order.products.map((orderProduct) =>
                                <OrderProducts key={orderProduct.name} orderProduct={orderProduct} />
                            )}
                        </ul>
                    </li>
                    {/* Total Paid */}
                    <li className="order-complete-details total-paid">
                        <h2>Total Paid: <span>${data.order.total}</span></h2>
                    </li>
                </ul>
            </div>
        </OrderCompleteStyle>
    )
}

export default OrderComplete;