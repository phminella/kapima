import OrderComplete from '../components/OrderComplete'

const OrderCompletePage = ({query}) => {
    return (
        <OrderComplete orderId={query.orderId}></OrderComplete>
    )
}

export default OrderCompletePage