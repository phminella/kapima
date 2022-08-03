import styled from "styled-components";

export const OrderCompleteStyle = styled.div`
background:white;
padding:20px;
max-width:800px;
@media screen and (max-width: 860px) { 
margin-top:35px;
width:100vw;
}
h1 {
    font-weight: bold;
    a {
        font-size:1.5rem;
        color:#f7145f;
        text-decoration: underline;
        float:right;
    }
}
.order-complete-details {
    align-items: center;
    padding:15px;
    margin:10px 0;
    border:1px solid lightgray;
    gap:5px;
    span {
        font-weight: bold;
        color:#f7145f;
    }
&.cc-details {
    p {
    display:flex;
    align-items: center;
    gap:5px;
    }
}
&.total-paid {
    text-align:right;
}
}
`