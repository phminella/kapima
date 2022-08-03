import { OrderProductsStyle } from './styles/OrderProductsStyle'

const OrderProducts = ({ orderProduct }) => {
    return (
        <OrderProductsStyle>
            <img src={orderProduct.image[0].image.publicUrlTransformed} />
            <div className="cart-product-details">
                <h4>{orderProduct.name}</h4>
                <p>{orderProduct.description}</p>
                <div className="cart-product-price">
                   <p>${`${orderProduct.price} x ${orderProduct.quantity}`} </p>
                    <p className='cart-product-total-price'>${orderProduct.price * orderProduct.quantity}</p>
                </div>
            </div>
        </OrderProductsStyle>
    )
}

export default OrderProducts;