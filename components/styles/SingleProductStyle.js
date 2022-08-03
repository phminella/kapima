import styled from "styled-components";

export const SingleProductStyle = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
background:white;
gap: 2rem;
z-index: 1;
@media screen and (max-width: 860px) { 
grid-template-columns: 1fr;
margin-top:60px;
}
.close-product-button {
    font-size:1.5em;
    border:none;
    background:none;
    position:absolute;
    right:10px;
    top:10px;
    @media screen and (max-width: 860px) { 
    background:white;
    border-radius:50%;
    width:30px;
    height:30px;
 }
}
.product-image {
img {
  width: 100%;
  object-fit: contain;
}
}
.product-details {
    padding:20px;
    p {
        font-size:1.1em;
    }
    h3 {
        margin:0;
        font-size:1.8em;
        color:#f7145f;
    }
    .product-button {
        margin-top:20px;
        button {
            position: relative;
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
            bottom:50%;
            right:50%;
            border-radius:100%;
            background:#f7145f;
            font-size:0.8em;
            transition: all 0.5s;
            z-index:-1;
            }
            &.button-animation {         
            ::before { 
                bottom:110%;
            }
            }
        }
    }
}
`