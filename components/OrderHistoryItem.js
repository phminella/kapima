import { OrderHistoryItemStyle } from "./styles/OrderHistoryItemStyle";
import Link from "next/link";

const OrderHistoryItem = ({order}) => {
    return (
            <OrderHistoryItemStyle>
                <div><p className='order-item'>ORDER PLACED</p><p><b>{order.createdAt.substring(0, 10)}</b></p></div>
                <div><p className='order-item'>TOTAL PAID</p><p><b>${order.total}</b></p></div>
                <div><p className='order-item'>DELIVERED TO</p><p><b>{order.user.name}</b></p></div>
                <div><p className='order-item'>ORDER #{order.id}</p><Link href={`order-complete?orderId=${order.id}`}>View order Details</Link></div>
            </OrderHistoryItemStyle>
    )
}

export default OrderHistoryItem;