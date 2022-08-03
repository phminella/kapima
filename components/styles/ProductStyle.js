import styled from 'styled-components';
export const ProductStyle = styled.li`
  position:relative;
  padding:10px;
  background:white;
  z-index:1;
  h3 {
    margin:5px 0;
    color:#f7145f;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color:#30cf55;
    }
  }
  img {
  width:100%;  
  }
  p {
    padding:5px 0;
  }
  .product-description {
    margin-bottom:70px;
  }
  .product-price {
    position:absolute;
    top:0;
    left:-10px;
    background:#fae34d;
    padding:10px;
    font-weight: bold;
    transform: skew(-10deg, -10deg);
    }
  button {
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  padding:20px 0;
  border:none;
  background:#30cf55;
  font-size: 1em;
  color:white;
  &:hover {
    background:#f7145f;
  }
  ::before {
            content:"+1"; 
            position:absolute;
            display:flex;
            align-items: center;
            justify-content: center;
            width:20px;
            height:20px;
            bottom:100%;
            right:50%;
            border-radius:100%;
            background:#f7145f;
            font-size:0.8em;
            transition: all 0.5s;
            opacity:0;
            z-index:-1;
            }
            &.button-animation {         
            ::before { 
                bottom:110%;
                opacity:1;
            }
      }
  }
  `;