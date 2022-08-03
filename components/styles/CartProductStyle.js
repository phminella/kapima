import styled from 'styled-components';
export const CartProductStyle = styled.li`
 position: relative;
 display:grid;
 grid-template-columns: 1fr 3fr 1fr;
 align-items: center;
 height:80px;
 gap: 10px;
 margin:15px 10px;
 img {
    border-radius: 10px;
    height:80px;
    width:80px;
 }
 .cart-product-details {
    h4 {
        margin:0;
    }
    .cart-product-total-price {
        color:#f7145f
    }
 }
 .cart-product-functions {
 .update-quantity {
    display:flex;
    align-items: center;
    button, input {
        width: 20px;
        height:20px;
        border:none;
        outline:none;
    }   
    input {
        text-align: center;
    } 
    button {        
        background:#f7145f;
        color:white;
    }
  }
    .remove-button {
        width:60px;
        background:#f7145f;
        color:white;   
        height:20px;
        border:none;
        outline:none; 
        padding:0;    
    }
 }
 `;