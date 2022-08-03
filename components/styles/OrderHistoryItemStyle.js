import styled from "styled-components";

export const OrderHistoryItemStyle = styled.li`
display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr;
@media screen and (max-width: 860px) { 
grid-template-columns: 1fr 1fr;
}
padding:15px;
margin:10px 0;
border:1px solid lightgray;
gap:5px;
.order-item {
    font-size:0.8em;
}
a {
    color:#f7145f;
    text-align: right;
}
`