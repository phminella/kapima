import styled from "styled-components";

export const CartStyle = styled.div`
position:fixed;
right:0;
top:0;
background:white;
border-left:3px solid #f7145f;
height:100vh;
width: 30vw;
@media screen and (max-width: 860px) { 
  width: 90vw;
}
z-index:9999;
transition: all 0.5s ease-in-out;
&.hidden {
right:-30vw;
@media screen and (max-width: 860px) { 
right: -90vw;
}
}
.close-cart-button {
    position: absolute;
    top:0;
    left:0px;
    background:none;
    border:none;
    color:black;
    font-size:1.3em;
}
.cart-description 
{
    text-align:center;
    padding:20px;
    border-bottom:1px solid lightgray;
}
ul {    
    margin:15px 0;
    max-height:380px;
  overflow-y: scroll;
  scrollbar-color: #f7145f lightgrey;
  scrollbar-width: auto;

/* WebKit and Chromiums */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background: #f7145f;
  border-radius: 5px;
}
}
.total-amount {
    border-top:1px solid lightgray;
    padding:10px 0;
    text-align:center;
    span {        
    color:#f7145f;
    font-weight:bolder;
    }
}
.project-capybara {
    position:absolute;
    bottom:0;
    width:100%;
    padding:10px;
    border-top:1px solid lightgray;
    display: flex;
    align-items:center;
    justify-content: right;
    gap:3px;
    background:white;
    img {
        width:40px;
    }
    span {        
    font-weight: bold;
    }
}
`