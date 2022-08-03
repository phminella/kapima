import OrderHistory from '../components/OrderHistory'

const OrderHistoryPage = ({query}) => {
    return (
        <OrderHistory userId={query.userId}></OrderHistory>
    )
}

export default OrderHistoryPage